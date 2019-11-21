# Cypress Workshop

This repo contains an example React App, [TodoMVC](http://todomvc.com), with the goal of learning how to use [Cypress.io](https://cypress.io)

This repo is **heavily** inspired in the [cypress-example-TodoMVC repo](https://github.com/cypress-io/cypress-tutorial-build-todo) from [Cypress.io](https://cypress.io)

## Help

The steps below will allow to start this workshop


### 1. Fork this repository

After forking this project in `Github`, run these commands:

```bash
## clone this repo to a local directory
git clone https://github.com/<your-username>/cypress-workshop.git

## cd into the cloned repo
cd cypress-workshop

## install the node_modules
npm install

## start the local webserver
npm start
```

The `npm start` script will spawn:

* a web server on port `8080` which hosts the TodoMVC app.
* An API on port `3030` wich serves the data for the webapp.

You can verify this by opening your browser and navigating to: [`Web`](http://localhost:8080) [`API`](http://localhost:3030/todos)

You should see the TodoMVC app up and running. We are now ready to run Cypress tests.

For exercises check [here](exercises/)

