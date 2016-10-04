export default function bookReducer (state = {}, action) {
  switch (action.type) {
  case 'GET_BOOK':
    return Object.assign({}, state, {
      book: action.payload.book
    });
  case 'USER_BOOKS':
    return Object.assign({}, state, {
      userBooks: action.payload.books
    });
  default:
    return state;
  }
}
