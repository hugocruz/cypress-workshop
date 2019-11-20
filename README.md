# Cypress Workshop

This repo contains an example React App, [TodoMVC](http://todomvc.com), with the goal of learning how to use [Cypress.io](https://cypress.io)

This repo is **heavily** inspired in the [cypress-example-TodoMVC repo](https://github.com/cypress-io/cypress-example-todomvc) from [Cypress.io](https://cypress.io)

## Help

The steps below will allow to start this workshop


### 1. Fork this repo

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

The `npm start` script will spawn a webserver on port `8888` which hosts the TodoMVC app.

You can verify this by opening your browser and navigating to: [`http://localhost:8888`](http://localhost:8888)

You should see the TodoMVC app up and running. We are now ready to run Cypress tests.

For exercises check [here](exercises/)




