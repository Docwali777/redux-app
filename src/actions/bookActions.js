export function getBooks(books){
  return {
    type: 'GET_BOOKS'
  }
}


export function postBooks(book){
  return {
    type: 'POST_BOOK',
    payload: book
  }
}

export function deleteBooks(id){
  return {
    type: 'DELETE_BOOK',
  payload: id
}
}

export function updateBook(book){
  return {
    type: 'UPDATE_BOOK',
    payload: book

  }
}
