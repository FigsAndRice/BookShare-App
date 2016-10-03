export default function searchedBooksReducer(state = [], action) {
  switch (action.type) {
  case 'SEARCHED_BOOKS':
    return action.payload.books;
  default:
    return null;
  }
}
