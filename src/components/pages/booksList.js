import React, { Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'
import { getBooks} from '../../actions/bookActions'

import { Grid, Row, Col, Button } from 'react-bootstrap'

import BookItem from './bookItem'
import BooksForm from './booksForm'
import Cart from './cart'

class Booklist extends Component{
componentDidMount(){
  this.props.getBooks()
}

  render(){
    let bookList = this.props.books.map(book=>{
      return(
<Col xs={12} sm={6} md={4} key={book._id}>
<BookItem
    _id={book._id}
    title={book.title}
    description={book.description}
    price={book.price}/>
</Col>

      )
    })
    return(
  <Grid>
    <Row>
      <Cart />
    </Row>
    <Row style={{marginTop: 15}}>
      <Col xs={12} sm={6}>
          <BooksForm />
      </Col>
        {bookList}
    </Row>
  </Grid>
    )
  }
}

function mapStateToProps(state){
  return {
    books: state.books.books
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
      getBooks
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Booklist)
