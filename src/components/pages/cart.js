import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Panel,ButtonGroup, Label, Col, Row, Well, Button} from 'react-bootstrap'
import { bindActionCreators} from 'redux'
import {addToCart, deleteBookFromCart, updateQuantity } from '../../actions/cartActions'

class Cart extends Component {
deleteItem = (id) =>{

this.props.deleteBookFromCart(id)
}

increment =(_id)=>{
this.props.updateQuantity(_id, 1)
}

decrement =(_id)=>{
  let decreaseItem = [...this.props.cart]
  let index = decreaseItem.findIndex(cart=>{
    return cart._id === _id
  })
  if(decreaseItem[index].quantity > 0){
      this.props.updateQuantity(_id, -1)
  }

}

render(){
  if(this.props.cart[0]){
    return this.renderCart()
  }
  else{
    return this.renderEmpty()
  }
}

renderEmpty(){
  return (<div></div>)
}
renderCart(){
  const cartListItem = this.props.cart.map(cart=>{
    return (
      <Panel key={cart._id}>
          <Row>
            <Col xs={12} sm={4}>
                <h6>{cart.title}</h6><span>     </span>
            </Col>
            <Col xs={12} sm={2}>
                <h6>USD: {cart.price}</h6><span>     </span>
            </Col>
            <Col xs={12} sm={2}>
                <h6>qty: <Label bsStyle='success'>{cart.quantity}</Label></h6><span>     </span>
            </Col>
            <Col xs={6} sm={4}>
                <ButtonGroup style={{minWidth: '300px'}}>
                    <Button onClick={()=>this.decrement(cart._id)} bsStyle='default' bsSize='small'> - </Button>
                    <Button onClick={()=>this.increment(cart._id)} bsStyle='default' bsSize='small'> + </Button>
                    <span>   </span>
                    <Button onClick={()=>this.deleteItem(cart._id)} bsStyle='danger' bsSize='small'>Delete</Button>
                </ButtonGroup>
                            </Col>
          </Row>
      </Panel>
    )
  })
  return(<Panel header='Cart' bsStyle='primary'>
    {cartListItem}
  </Panel>)
}

}

function mapStateToProps(state){
  return {
    cart: state.cart.cart
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    addToCart,deleteBookFromCart, updateQuantity
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
