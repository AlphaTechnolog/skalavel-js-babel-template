# Skalavel JS/Babel/Nodemon Template

A simple skalavel/js/babel/nodemon template to create a scalable
web application

**NOTE**: Skalavel not have very good features (**now**) such as Middlewares, Views, etc. Skalavel is in development.

## Getting started

First clone tht repository:

```sh
mkdir ~/repo
cd !$
git clone https://github.com/AlphaTechnolog/skalavel-js-babel-template.git my-awesome-skalavel-app
cd !$
```

Install the dependencies:

```sh
npm install
# or with yarn
yarn
```

Copy `.env.example` -> `.env`

```sh
cp -r ./.env.example ./.env
```

**NOTE**: Edit the `.env` you like!

## Running the application

To run the application use the `build` and `start` command:

```sh
npm run build
npm run start
```

Or if you like all in one command:

```sh
npm run build:start
```

## Running the application (for development)

To run the application for development use the `dev` command, it uses
nodemon to hot reloading

```sh
npm run dev
```

## Opening the application

To open the application in your browser, check the `.env` file

```sh
cat .env
```

```sh
PORT=8000 # or your configured port
```

Assuming your port is 8000, open in your browser: [localhost:8000](http://localhost:8000)

**NOTE**: The `PrintPortTask` print the port for you!

## Enjoy

Enjoy with this template and skalavel!