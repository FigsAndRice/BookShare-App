import { combineReducers } from 'redux'

import results from './resultsReducers'
import books from './booksReducers'
export default combineReducers({
  results,
  books
})
