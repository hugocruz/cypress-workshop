# Cypress Workshop

This repo contains an example React App, [TodoMVC](http://todomvc.com), with the goal of learning how to use [Cypress.io](https://cypress.io)

This repo is **heavily** inspired in the [cypress-example-TodoMVC repo](https://github.com/cypress-io/cypress-tutorial-build-todo) from [Cypress.io](https://cypress.io)

## Help

The steps below will allow to start this workshop

### Fork or clone this repository

After forking this project in `Github`, run these commands:

```bash

## cd into the repo
cd cypress-workshop

## install the node_modules
npm install

## start the local webserver with the API
npm start
```

The `npm start` script will spawn:

* a web server on port `8080` which hosts the TodoMVC app.
* An API on port `3030` wich serves the data for the webapp.

You can verify this by opening your browser and navigating to: [`Web`](http://localhost:8080) [`API`](http://localhost:3030/todos)

You should see the TodoMVC app up and running. We are now ready to run Cypress tests.

For exercises check [here](exercises/)


For extended support in vscode for the cypress syntax add the following header

```js
// type definitions for Cypress object "cy"
/// <reference types="cypress" />
```

### Cypress References

[API](https://docs.cypress.io/api/api/table-of-contents.html)

[Why Cypress](https://docs.cypress.io/guides/overview/why-cypress.html)

[Introduction to Cypress](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress.html)
