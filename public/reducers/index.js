import { combineReducers } from 'redux';
import results from './resultsReducer';
import books from './booksReducer';
import user from './userReducer';
import searchedBooks from './searchedBooksReducer';
import image from './imageReducer';
import showFav from './showFavReducer';

export default combineReducers({
  results,
  books,
  user,
  searchedBooks,
  image,
  showFav
})
