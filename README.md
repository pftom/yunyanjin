# yunyanjin

This is the client-side codebase of Yunyanjin project.

## How to start the dev server

1. Make sure you have `npm 5.3.0`, `Node v8.2.1`.

2. And `git clone git@github.com:powerformer/yunyanjin.git` to your local machine.

3. `cd yunyanjin && npm install`

4. `npm start` start this project

## How to deploy

1. First and foremost, install docker on your machine. [The official docker documentation](https://docs.docker.com/engine/installation/) is a good start.

2. Install fabric and oss2 on your machine(Remember it's based on **Python2**, so you have to check you are using `pip` for Python2).

```bash
$ pip install fabric oss2
```

3. Adjust the **fabfile.py** global settings to your taste.

```python
env.hosts = ['YOUR HOST']

image_repo = 'YOUR DOCKER IMAGE REPO'
container_name = 'YOUR CONTAINER NAME'
oss_vendor = 'YOUR OSS VENDOR'
bucket_url = 'YOUR BUCKET URL'
```

4. Contact mrc for ACCESS_KEY and pf.pem, and put it in the project folder.

5. Build your project and deploy it in one single command respectively. If you have are unfamiliar with command function, refer to `fabfile.py`.

```bash
$ fab build
$ fab deploy -i pf.pem
```

Then grab a cup of coffee for yourself, and you'll see your changes alive.