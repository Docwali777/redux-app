import React, { Component} from 'react'
import {  findDOMNode } from 'react-dom'
import { Well, Button, Panel, FormGroup, FormControl, ControlLabel} from 'react-bootstrap'

import { postBooks } from '../../actions/bookActions'

import { connect} from 'react-redux'
import { bindActionCreators} from 'redux'

class BooksForm extends Component{

postBooks = () =>{
let book = [{
  title: findDOMNode(this.refs.title).value,
  description: findDOMNode(this.refs.description).value,
  price: findDOMNode(this.refs.price).value,
}]
this.props.postBooks(book)
}

  render(){

    return(
<Well>
  <Panel>
    <FormGroup controlId='title'>
      <ControlLabel>Title</ControlLabel>
<FormControl
  type='text'
  placeholder='Enter Title'
  ref='title'
/>
    </FormGroup>

    <FormGroup controlId='description'>
      <ControlLabel>Description</ControlLabel>
    <FormControl
    type='text'
    placeholder='Enter Description'
    ref='description'
    />
    </FormGroup>

    <FormGroup controlId='price'>
      <ControlLabel>Price</ControlLabel>
<FormControl
  type='text'
  placeholder='Enter Price'
  ref='price'
/>
    </FormGroup>
<Button onClick={()=>this.postBooks()} bsStyle='primary'>Save Book</Button>
  </Panel>
</Well>
    )
  }
}
function mapStateToProps(state){
  return{
    cart: state.cart.cart
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    postBooks
  }, dispatch)
}
export default connect(null, mapDispatchToProps)(BooksForm)
