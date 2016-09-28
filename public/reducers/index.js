import { combineReducers } from 'redux';
import results from './resultsReducer';
import books from './booksReducer';
import user from './userReducer';

export default combineReducers({
  results,
  books,
  user
})
