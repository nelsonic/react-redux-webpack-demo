# react-redux-webpack-demo

This repo requires a basic understanding of both react and webpack, if you are not comfortable with these technologies please checkout the prerequisite [react-webpack-demo](https://github.com/ag-digital/react-webpack-demo).

## Getting started

* git clone the project
* Install webpack by running `npm install -g webpack`.
* cd into the project directory and run `npm install`.
* Run `webpack` to compile all of the assets. (If you get any errors during this process, make sure that you're running Node version 4.2.1)
* Tests can be run using the `npm run unit:test` command or `npm run e2e:test`.
* To start the server, run `npm start`, you can then view the homepage at (http://localhost:8080)

## React

This repo aims to demonstrate how React, Redux and Webpack can be used to implement a simple product list and shopping cart functionality. Clicking a product image adds that product to the shopping cart and updates the total value. 
Products can be removed from the shopping cart by clicking the `-` button under each product.
Both the product list and shopping cart are two separate React components and can be viewed in the `/src/components` folder.

Our main React component is defined in the `App.jsx` file. You will see that we import the products data here and then pass this data onto the `ProductList` component. The `ProductList` component then renders this data in a new `<div>`.
We have also introduced to new functions to our `ProductList` component, `mapDispatchToProps` and `mapStateToProps`. 

The first function is what dispatches a product object to the Redux store when a product is clicked. You will see that the `<img>` tag has an `onClick` attribute. This calls the `add` action when a product image is clicked. The `add` action then calls the relevant reducer function. This is how the application's state gets updated.
We added the `mapStateToProps` function for completion in this case but it is not used in the `ProductList` component.

The `ShoppingCart` component is defined in the `ShoppingCart.jsx` file. As in the `ProductList` component, we have defined the `mapDispatchToProps` and `mapStateToProps` functions to interact with the Redux store.
In this case the `mapStateToProps` function is being used to listen for any changes to the `products` object in the Redux store and `mapDispatchToProps` has been added for completion. 
These two functions interact with the Redux store via the `connect` module which is imported from `react-redux` in each component.

## Redux

The main difference between this repo and the prerequisite repo [react-webpack-demo](https://github.com/ag-digital/react-webpack-demo) is the introduction of the Redux framework.

[Redux](https://github.com/rackt/redux) is a state container that allows you to maintain an application's state. 
It operates independently of React as its main purpose is to update and keep track of an application's data.

Redux consists of the following components to make this work:
* A single store which contains object tree data structures and keeps track of any changes made to an application's data. It's also worth noting that the Redux store is an immutable data structure and for this reason a new object is created when the data is updated.
* Actions: These are simple Javascript objects that describe what changes will be made to the data. For an example, please see the `shopping-actions.js` file located in `/src/actions`.
* Reducers: These are the functions which update the application's data. Every action has a correspending function in the reducer. For an example, please see the `shopping-reducer.js` file in the `/src/reducers` folder.

## Tests

#### Unit 
We have implemented several unit tests for this application using [tape](https://github.com/substack/tape). Each of these tests can be found in the `/tests/unit` folder.
We currently have three test files:
* `component.js`: This file implements several `jsdom` tests. These unit tests ensure that the UI is updated correctly when a product has been added/removed from the shopping cart.
* `reducers.js`: This file tests the `add` and `remove` functions defined in our Redux reducer. It mocks a simple product object and ensures that the Redux stores are updated correctly when adding or removing a product.
* `utils.js`: This tests a `group by` utility function located in `/src/lib/group-by.js`.

#### e2e
For e2e testing we have used [Nightwatch.js](http://nightwatchjs.org) which utilises [Selenium server](http://www.seleniumhq.org) as well as a built in testrunner to run in browser testing.
Here are a few things that you might need to know:
* Selenium creates a java server so ensure that java is installed on your machine.
* The Nightwatch tests the app by going to  (http://localhost:8080) so make sure the app is running before running the e2e tests.


