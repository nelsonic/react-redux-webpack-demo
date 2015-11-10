import React from 'react'
import { connect } from 'react-redux'
import groupBy from '../../lib/group-by.js'
import * as actions from '../../actions/shopping-actions.js'

class ShoppingCart extends React.Component {
  constructor() {
    super()
  }

  render() {
   const { products, remove } = this.props
   const groupedProducts = groupBy(products, 'name')
   const totalPrice = products.reduce((previous, current) => { return previous + current.price }, 0)
   return (
     <div className= 'shoppingContainer'>
      {
        groupedProducts.map((product, i) =>
          (
          <div key={ i }>
            <h2>{ product.name }</h2>
            <h2>£ { product.price }</h2>
            <h2>Quantity: { product.index.length }</h2>
            <button className="removeFromCartBtn" onClick= { remove.bind(null, product.index[0] )}> - </button>
          </div>
          )
        )
      }
      <h2>Total: <b>£ { totalPrice } </b></h2>
     </div>
   )
  }
}

function mapStateToProps(state) {
  return {
    products: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    remove: (index) => dispatch(actions.remove(index))
  }
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCart)
