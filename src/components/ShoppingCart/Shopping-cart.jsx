import styles from './shopping-cart.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

class ShoppingCart extends React.Component {
  constructor() {
    super()
  }

  render() {
   const { products } = this.props
   const totalPrice = products.reduce((previous, current) => { return previous + current.price }, 0)
   return (
     <div className={ styles.container }>
      {
        products.map((product, i) =>
          (
          <div key={ i }>
            <h2>{ product.name }</h2>
            <h2>{ product.price }</h2>
          </div>
          )
        )
      }
      <h2>Total: <b> { totalPrice } </b></h2>
     </div>
   )
  }
}


function mapStateToProps(state) {
  return {
    products: state
  }
}

export default connect (
  mapStateToProps
)(ShoppingCart)
