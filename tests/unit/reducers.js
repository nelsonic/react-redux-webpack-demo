import test from 'tape'
import { createStore } from 'redux'
import shoppingReducer from '../../src/reducers/shopping-reducer.js'
import * as actions from '../../src/actions/shopping-actions.js'

let product = {
  name: 'Varsity Jacket',
  price: '65'
}
/*
* getState() returns a List from the ImmutableJS module which is an object.
* This is then converted to a JavaScript array using toArray()
*/
test('add an item to the store', (t) => {
  let store = createStore(shoppingReducer)
  store.dispatch(actions.add(product))
  let products = store.getState().toArray()
  t.deepEqual(products[0], product, 'product added to store')
  t.end()
})

test('remove an item from the store', (t) => {
  let store = createStore(shoppingReducer)
  store.dispatch(actions.add(product))
  store.dispatch(actions.remove(0))
  let products = store.getState().toArray()
  t.equal(products.length, 0, 'product removed from store')
  t.end()
})
