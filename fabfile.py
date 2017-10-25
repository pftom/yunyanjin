"""
Yunyanjin client fabric script.

Available commands:

- `fab build`: Run react build scripts and upload static assets to OSS, and replace
links in HTML meanwhile.
- `fab deploy`: Handle the whole process of docker image, and (re)deploy the container.
"""

from __future__ import with_statement

from datetime import datetime

from fabric.api import *
import oss2

env.hosts = ['root@yunyanjin.com']

image_repo = 'pftom/yunyanjin-client'
container_name = 'yyj_client'
oss_vendor = 'http://oss-cn-hangzhou.aliyuncs.com'
bucket_url = 'http://yunyanjin.oss-cn-hangzhou.aliyuncs.com'


def read_api_auth():
    """Read API Access Key so as to control OSS service."""
    with open('ACCESS_KEY') as fp:
        keys = fp.readlines()
    return oss2.Auth(keys[0], keys[1])


def collect_static_files():
    """Capture names of static files needed to be uploaded."""
    static_files = []

    for filename in local("ls build/css/", capture=True).split():
        static_files.append('/css/' + filename)

    for filename in local("ls build/js/", capture=True).split():
        static_files.append('/js/' + filename)

    for filename in local("ls build/static/css", capture=True).split():
        static_files.append('/static/css/' + filename)

    for filename in local("ls build/static/js", capture=True).split():
        static_files.append('/static/js/' + filename)

    return static_files


def upload_to_oss(static_files):
    """Upload static assets to OSS via SDK."""
    # Initialize api auth with access key
    print "Reading api auth keys ...",
    auth = read_api_auth()
    print "Done."

    bucket = oss2.Bucket(auth, oss_vendor, 'yunyanjin')

    # Delete existing outdated static assets
    print "Deleting existing outdated static assets in OSS ...",
    for file in oss2.ObjectIterator(bucket):
        if file.key in ['css', 'js', 'static']:
            bucket.delete_object(file.key)
    print "Done."

    print "Uploading latest static assets ...",
    for static_file in static_files:
        bucket.put_object_from_file(
            static_file.lstrip('/'),
            'build' + static_file
        )
    print "Done."


def replace_links(static_files):
    """Replace links of static assets in index page."""
    print "Replacing links in index.html ...",
    with open('build/index.html') as fp:
        filedata = fp.read()

    for static_file in static_files:
        filedata = filedata.replace(
            static_file,
            bucket_url + static_file
        )

    # Write the modified html code back
    with open('build/index.html', 'w') as fp:
        fp.write(filedata)

    print "Done."


def build():
    """
    Run react build scripts and upload static assets to OSS,
    and replace links in HTML meanwhile.
    """
    # local("npm run build")

    static_files = collect_static_files()
    upload_to_oss(static_files)
    replace_links(static_files)


def pull_image_and_redeploy():
    """Pull the newest image from Docker Hub and redeploy the container."""
    # Pull the newest image
    run("docker pull %s" % image_repo)

    running_containers = run("docker ps --format {{.Names}}").split()
    if container_name in running_containers:
        # The image already has a running container
        # So we need to remove it
        run("docker rm -f %s" % container_name)

    if 'proxy' in running_containers:
        # The proxy container is running
        run("docker rm -f proxy")

    # Run a container with the updated image
    run("docker run -d --name %s --restart=always %s"
        % (container_name, image_repo))
    run("docker run -d --name proxy -p 80:80 --link web:web \
        --volumes-from web --volumes-from yyj_client \
        --restart=always powerformarc/pf-proxy")


def deploy_with_private_key():
    """
    Push your code, handle the whole process of docker image.
    and (re)deploy the container.
    """
    # Build and push the image
    local("docker build -t %s ." % image_repo)
    local("docker push %s" % image_repo)

    pull_image_and_redeploy()


def deploy():
    """Simplify deploy command from `fab deploy -i pf.pem` to `fab deploy`."""
    local("fab deploy_with_private_key -i pf.pem")
