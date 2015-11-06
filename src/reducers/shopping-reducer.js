import Immutable from 'immutable'
import { createReducer } from 'redux-immutablejs'
const initialState = Immutable.List()

/**
 * Reducer domain that adds and removes from the shopping cart.
 **/
export default createReducer(initialState, {
  ADD: (state, { item }) => state.push(item),
  REMOVE: (state, { item }) => state
})
