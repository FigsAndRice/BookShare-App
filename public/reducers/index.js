import { combineReducers } from 'redux';
import results from './resultsReducer';
import books from './booksReducer';
import user from './userReducer';
import searchedBooks from './searchedBooksReducer';

export default combineReducers({
  results,
  books,
  user,
  searchedBooks
})
