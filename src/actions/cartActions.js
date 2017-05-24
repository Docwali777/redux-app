export function addToCart(book){
  return {
type: 'ADD_TO_CART',
payload: book
  }
}


export function updateQuantity(_id, unit){
  return {
type: 'UPDATE_CART_ITEM',
payload:{_id, unit}
  }
}



export function deleteBookFromCart(_id){
  return {
type: 'DELETE_CART_ITEM',
payload:{_id}
  }
}
