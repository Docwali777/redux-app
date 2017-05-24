import React, { Component} from 'react'
import { render } from 'react-dom'
import BookList from './components/pages/booksList'
import { Provider } from 'react-redux'
//-------REDUX
import {createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger'

import reducers  from './reducers/index'

import { postBooks, deleteBooks, updateBook} from './actions/bookActions'

import { addToCart } from './actions/cartActions'

var middleware = applyMiddleware(logger)
var store = createStore(reducers, middleware)


render(<Provider store={store}>
  <BookList />
</Provider>, document.getElementById('app'))
