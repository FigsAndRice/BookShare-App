/* eslint-disable import/extensions */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-children-prop */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-boolean-value */

import axios from 'axios';
import RouteActions from './RouteActions';

export function searchedBooks(books) {
  return {
    type: 'SEARCHED_BOOKS',
    payload: { books }
  };
}

export function searchBooks(isbn) {
  return (dispatch) => {
    axios.get(`/api/books/${isbn}`)
.then(res => dispatch(searchedBooks(res.data)))
.catch();
  };
}

export function userBooks(books) {
  return {
    type: 'USER_BOOKS',
    payload: { books }
  };
}

export function getBook(book) {
  localStorage.book = JSON.stringify(book);
  RouteActions.route(`/book/${book.isbn}`);
  return {
    type: 'GET_BOOK',
    payload: { book }
  };
}

export function addBook(book, userId) {
  const { isbn, title, authors, pictureNormal } = book;
  const newBook = { isbn, title, author: authors, cover: pictureNormal, owner: userId };
  return (dispatch) => {
    axios.post('/api/books', newBook)
      .then(RouteActions.route('/'))
      .catch();
  };
}

export function getUserBooks(userId) {
  return (dispatch) => {
    axios.get(`/api/books/owner/${userId}`)
  .then((res) => {
    dispatch(userBooks(res.data));
  })
.catch();
  };
}

export function forSale(bookId, bookObj, userId) {
  return (dispatch) => {
    axios.put(`/api/books/edit/${bookId}`, bookObj)
.then(() => {
  RouteActions.route('/');
  dispatch(getUserBooks(userId));
})
.catch();
  };
}

export function deleteBook(bookId, userId) {
  return (dispatch) => {
    axios.delete(`/api/books/${bookId}`)
.then(() => {
  dispatch(getUserBooks(userId));
})
.catch();
  };
}


export function changeOwner(bookId, userId) {
  return (dispatch) => {
    axios.put(`/api/books/${bookId}/changeOwner/${userId}`)
.then(() => {
  dispatch(getUserBooks(userId));
})
.catch();
  };
}
