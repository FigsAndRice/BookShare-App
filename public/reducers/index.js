import { combineReducers } from 'redux';
import results from './resultsReducers';
import books from './booksReducers';
import user from './userReducer';

export default combineReducers({
  results,
  books,
  user
})
