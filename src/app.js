import React, { Component} from 'react'
import { render } from 'react-dom'

import { Router, Route, IndexRoute, browserHistory} from 'react-router'

import BookList from './components/pages/booksList'
import Cart from './components/pages/cart'
import BooksForm from './components/pages/booksForm'
import Main from './main'

import { Provider } from 'react-redux'
//-------REDUX
import {createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger'

import reducers  from './reducers/index'

import { postBooks, deleteBooks, updateBook} from './actions/bookActions'

import { addToCart } from './actions/cartActions'

var middleware = applyMiddleware(logger)
var store = createStore(reducers, middleware)



const Routes = (
  <Provider store={store}>
      <Router history={browserHistory}>
          <Route path='/' component={Main}>
          <IndexRoute component={BookList} />
          <Route path='/admin' component={BooksForm} />
          <Route path='/cart' component={Cart}  />
        </Route>
      </Router>
  </Provider>
)

render(Routes, document.getElementById('app'))
