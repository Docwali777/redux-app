import React, { Component} from 'react'
import {createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger'


const reducer = (state ={number: 0}, action) =>{
switch(action.type){
  case 'ADD':
  let incByOne = {...state};
  return incByOne.number + action.payload.num
break
}

  return state
}
var middleware = applyMiddleware(logger)
var store = createStore(reducer, middleware)

store.dispatch({
  type: 'ADD',
  payload: {num: 1}
})
