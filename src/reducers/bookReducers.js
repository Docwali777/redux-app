export function bookReducers(state=
{
  books: [
    {
    _id: 1,
    title: 'My Life REjected',
    description: 'autobigraphy',
    price: 10
  },
  {
    _id: 2,
    title: 'The Hustle',
    description: 'autobigraphy',
    price: 19.99
  },
  {
    _id: 3,
    title: 'CS Studies',
    description: 'autobigraphy',
    price: 29.99
  }]

}
  , action){
switch(action.type){
case 'GET_BOOKS':
return {...state, books: [...state.books]}


case 'POST_BOOK':

let postBooks = {books: [...state.books, ...action.payload]}
return postBooks
break;

case 'UPDATE_BOOK':
let bookTitletoUpdate = [...state.books]
let indexToUpdate = bookTitletoUpdate.findIndex(book=>{
  return book._id === action.payload._id
})

let newTitle = {
  ...bookTitletoUpdate[indexToUpdate], title: action.payload.title
}

return {books: [...bookTitletoUpdate.slice(0, indexToUpdate), newTitle, ...bookTitletoUpdate.slice(indexToUpdate + 1)]}
break;

case 'DELETE_BOOK':
let bookToDelete = [...state.books]
let index = bookToDelete.findIndex(book=>{
  return book._id === action.payload._id
})

let bookDeleted = [...bookToDelete.slice(0, index), ...bookToDelete.slice(index+1)] ;
return {books: bookDeleted}
break;
}
  return state
}
