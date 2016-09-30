import { combineReducers } from 'redux';
import results from './resultsReducer';
import books from './booksReducer';
import user from './userReducer';
import searchedBooks from './searchedBooksReducer';
import images from './imageReducer'

export default combineReducers({
  results,
  books,
  user,
  searchedBooks
})
