import styles from './product-list.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import actions from '../../actions/shopping-actions.js'

class ProductList extends React.Component {
  constructor() {
    super()
  }

  render() {
   const { products, add } = this.props
   return (
     <div className={ styles.container }>
      {
        products.map((product, i) =>
          (
          <div key={ i }>
            <img onClick={ add.bind(null, product) } src={ '../../data/images/' + product.imageSource }/>
            <h2>{ product.name }</h2>
            <h2>{ product.price }</h2>
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
    add: (item) => dispatch(actions(item))
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
