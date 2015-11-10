import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions/shopping-actions.js'

class ProductList extends React.Component {
  constructor() {
    super()
  }

  render() {
   const { products, add } = this.props
   return (
     <div className='productContainer'>
      {
        products.map((product, i) =>
          (
          <div className='productContainer' key={ i }>
            <img className='productImg' onClick={ add.bind(null, product) } src={ '../../data/images/' + product.imageSource }/>
            <h2>{ product.name }</h2>
            <h2>£ { product.price }</h2>
          </div>
          )
        )
      }
     </div>
   )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    add: (item) => dispatch(actions.add(item))
  }
}

function mapStateToProps(state) {
  return {
    prods: state
  }
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(ProductList)
