import test from 'tape'
import React from 'react/addons'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import shoppingReducer from '../../src/reducers/shopping-reducer.js'
import App from '../../src/components/App/App.jsx'

const TestUtils = React.addons.TestUtils
const render = TestUtils.renderIntoDocument

test('Clicking a product image should add that product to the shopping cart', (t) => {
  const store = createStore(shoppingReducer)
  const DOM = render(<Provider store={ store }>
                       <App />
                     </Provider>)

  const shoppingContainer = TestUtils.findRenderedDOMComponentWithClass(DOM, 'shoppingContainer')
  t.equals(shoppingContainer.props.children[1].props.children[1].props.children[1], 0)
  const [ imageElement ] = TestUtils.scryRenderedDOMComponentsWithClass(DOM, 'productImg')
  TestUtils.Simulate.click(imageElement)
  t.equals(shoppingContainer.props.children[1].props.children[1].props.children[1], 50)
  t.end()
})

test('Clicking the delete button in the shopping cart should remove that product from the shopping cart', (t) => {
  const store = createStore(shoppingReducer)
  const DOM = render(<Provider store={ store }>
                      <App />
                     </Provider>)

  const shoppingContainer = TestUtils.findRenderedDOMComponentWithClass(DOM, 'shoppingContainer')
  t.equals(shoppingContainer.props.children[1].props.children[1].props.children[1], 0)
  const [ imageElement ] = TestUtils.scryRenderedDOMComponentsWithClass(DOM, 'productImg')
  TestUtils.Simulate.click(imageElement)
  t.equals(shoppingContainer.props.children[1].props.children[1].props.children[1], 50)
  const [ removeFromCartElement ] = TestUtils.scryRenderedDOMComponentsWithClass(DOM, 'removeFromCartBtn')
  TestUtils.Simulate.click(removeFromCartElement)
  t.equals(shoppingContainer.props.children[1].props.children[1].props.children[1], 0)
  t.end()
})
