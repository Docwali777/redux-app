import React, { Component } from 'react'
import { Nav, NavItem, Navbar, Badge} from 'react-bootstrap'

class Menu extends Component{
  render(){
    return (
  <Navbar inverse fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">React-Bootstrap</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="/about">About</NavItem>
        <NavItem eventKey={2} href="/contact">Contact</NavItem>

      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="/admin">Admin</NavItem>
        <NavItem eventKey={2} href="/cart">Cart
      <Badge className='badge'>1</Badge></NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)
  }
}
export default Menu
