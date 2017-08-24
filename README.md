# yunyanjin

## How to start the client

1. Make sure you have `npm 5.3.0`, `Node v8.2.1`.

2. And `git clone git@github.com:powerformer/yunyanjin.git` to your local machine.

3. `cd yunyanjin && npm install`

4. `npm start` start this project

## How to start the server

1. Make sure you have Python(>3.5) installed.

2. Create a new virtual environment for the project:

```bash
$ python3 -m venv venv
```

This will output a folder in the project root named `venv`.

3. Activate the virtual environment!

```bash
$ source venv/bin/activate
```

4. Install all dependent packages.

```bash
(venv)$ pip install -r requirements.txt
```

5. Run database migrations.

```bash
(venv)$ python manage.py migrate
```

6. Create a new superuser if you want to enter into site admin.

```bash
(venv)$ python manage.py createsuperuser
```

Just follow the prompts and do whatever told to do.

7. Run the development server.

```bash
(venv)$ python manage.py runserver
```
