import React from 'react'
import ShoppingCart from '../ShoppingCart/Shopping-cart.jsx'
import ProductList from '../ProductList/Product-list.jsx'
import productData from '../../data/products.js'

class App extends React.Component {
  constructor () {
    super()
  }

  render() {
    return (
      <div className='mainContainer'>
        <ProductList products={ productData }/>
        <ShoppingCart addedProducts={ productData }/>
      </div>
    )
  }
}

export default App
