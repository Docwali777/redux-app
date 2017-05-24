import React, { Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'

import { Row, Col, Well, Button } from 'react-bootstrap'

import {addToCart, updateQuantity} from '../../actions/cartActions'

class BookItem extends Component{

handleSubmitCart =(id)=>{

  const book = [{
    _id: this.props._id,
    title: this.props.title,
    description: this.props.description,
    price: this.props.price,
    quantity: 1
  }]

  if(this.props.cart.length > 0){
//cart is not empty
let _id = this.props._id

const cartIndex = this.props.cart.findIndex(cart=>{
  return cart._id === _id
  })
  if(cartIndex === -1){
    this.props.addToCart(book)
  }
  else { //update quantity
this.props.updateQuantity(_id, 1)
  }
  } else {

    //Cart is empty
    this.props.addToCart(book)
  }
}

  render(){
    return (
<Well>
  <Row>
<Col xs={12}>
<h6>{this.props.title}</h6>
<p>{this.props.description}</p>
<h6>{this.props.price}</h6>
<Button onClick={()=>this.handleSubmitCart(this.props._id)} bsStyle='primary'>Buy Now</Button>
</Col>
  </Row>
</Well>
    )
  }
}

function mapStateToProps(state){
  return {
    cart: state.cart.cart
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    addToCart, updateQuantity
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookItem)
