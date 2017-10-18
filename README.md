# yunyanjin

## How to start the dev server

1. Make sure you have `npm 5.3.0`, `Node v8.2.1`.

2. And `git clone git@github.com:powerformer/yunyanjin.git` to your local machine.

3. `cd yunyanjin && npm install`

4. `npm start` start this project

## How to deploy

1. First and foremost, install docker on your machine. [The official docker documentation](https://docs.docker.com/engine/installation/) is a good start.

2. Clone [the server-side repo](https://github.com/mRcfps/yunyanjin-server) , build docker image from it and run a container.

```bash
$ git clone https://github.com/mRcfps/yunyanjin-server.git
$ cd yunyanjin-server/
$ docker build -t yyj-web .
$ docker run -d --name web yyj-web
```

3. Clone this repo and run the following shell.

```bash
$ git clone https://github.com/pftom/yunyanjin.git
$ cd yunyanjin/
$ docker build -t yyj-client .
$ docker run -d --name proxy --volumes-from web --link web:web yyj-client
```
