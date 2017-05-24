export function cartReducers(state = {cart: []}, action){
switch(action.type){
  case 'ADD_TO_CART':
  return {cart: [...state.cart,...action.payload]}
  break;

  case 'UPDATE_CART_ITEM':
  let updateQuantityItem = [...state.cart]
  let indexToUpdate = updateQuantityItem.findIndex(book=>{
    return book._id === action.payload._id
  })

  let cartUpdate = {
    ...updateQuantityItem[indexToUpdate], quantity: updateQuantityItem[indexToUpdate].quantity + action.payload.unit
  }
console.log('cartUpdate=======>', cartUpdate);
  return {cart: [...updateQuantityItem.slice(0, indexToUpdate), cartUpdate, ...updateQuantityItem.slice(indexToUpdate + 1)]}
  break;


  case 'DELETE_CART_ITEM':
  let bookToDelete = [...state.cart]
  let index = bookToDelete.findIndex(cart=>{
    return cart._id === action.payload._id
  })
console.log('CART REDUCER INDEX',index);
  let bookDeleted = [...bookToDelete.slice(0, index), ...bookToDelete.slice(index+1)] ;
  return {cart: bookDeleted}
  break;
}
  return state
}
