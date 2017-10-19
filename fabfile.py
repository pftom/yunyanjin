"""
Yunyanjin client fabric script.

Available commands:

- `fab build`: Run react build scripts and upload static assets to OSS,
    and replace links in HTML meanwhile.
- `fab deploy`: Push your code, handle the whole process of docker image.
    and (re)deploy the container.
"""

from __future__ import with_statement

from fabric.api import *
import oss2

env.hosts = ['root@yunyanjin.com']

image_repo = 'powerformarc/yunyanjin-client'
container_name = 'yyj_client'
oss_vendor = 'http://oss-cn-hangzhou.aliyuncs.com'
bucket_url = 'http://yunyanjin.oss-cn-hangzhou.aliyuncs.com'


def read_api_auth():
    """Read API Access Key so as to control OSS service."""
    with open('ACCESS_KEY') as fp:
        keys = fp.readlines()
    return oss2.Auth(keys[0], keys[1])


def upload_to_oss(css_files, js_files):
    """Upload static assets to OSS via SDK."""
    auth = read_api_auth()
    bucket = oss2.Bucket(auth, oss_vendor, 'yunyanjin')

    # Delete existing outdated static assets
    for file in oss2.ObjectIterator(bucket):
        if file.key.endswith(('.js', '.css', '.map')) and file.key.startswith('main'):
            bucket.delete_object(file.key)

    for css_file in css_files:
        bucket.put_object_from_file(css_file, 'build/static/css/' + css_file)

    for js_file in js_files:
        bucket.put_object_from_file(js_file, 'build/static/js/' + js_file)


def replace_links(css_file, js_file):
    """Replace links of static assets in index page."""
    with open('build/index.html') as fp:
        filedata = fp.read()

    # Replace css link
    filedata = filedata.replace(
        '/static/css/%s' % css_file,
        '%s/%s' % (bucket_url, css_file)
    )

    # Replace js link
    filedata = filedata.replace(
        '/static/js/%s' % js_file,
        '%s/%s' % (bucket_url, js_file)
    )

    # Write the modified html code back
    with open('build/index.html', 'w') as fp:
        fp.write(filedata)


def build():
    """
    Run react build scripts and upload static assets to OSS,
    and replace links in HTML meanwhile.
    """
    local("npm run build")

    # Capture names of static files needed to be uploaded
    css_files = sorted(local("ls build/static/css/", capture=True).split())
    js_files = sorted(local("ls build/static/js/", capture=True).split())

    upload_to_oss(css_files, js_files)
    replace_links(css_files[0], js_files[0])


def pull_image_and_redeploy():
    """Pull the newest image from Docker Hub."""
    running_containers = run("docker ps --format {{.Names}}").split()
    if container_name in running_containers:
        # The image already has a running container
        # So we need to remove it
        run("docker rm -f %s" % container_name)

    # Pull the newest image
    run("docker pull %s" % image_repo)

    # Run a container with the updated image
    run("docker run -d --name %s --restart=always %s"
        % (container_name, image_repo))


def deploy():
    """
    Push your code, handle the whole process of docker image.
    and (re)deploy the container.
    """
    local("git push")

    # Build and push the image
    local("docker build -t %s ." % image_repo)
    local("docker push %s" % image_repo)

    pull_image_and_redeploy()
