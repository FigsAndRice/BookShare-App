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
import { browserHistory } from 'react-router';
// GOOGLE_BOOK url
const GOOGLE_BOOKS = 'https://www.googleapis.com/books/v1/volumes?q=';

export function showResults(results, query) {
  browserHistory.push(`/results/${query}`);
  return {
    type: 'GET_RESULTS',
    payload: {
      results
    }
  };
}

export function getResults(query) {
  const url = GOOGLE_BOOKS + query;
// get the results from google books
  return dispatch =>
axios.get(url)
.then(res => res.data)
.then((data) => {
  if (data.items) {
    const { items } = data;
    const books = [];
    items.forEach((val) => {
      const title = val.volumeInfo.title;
      const authors = val.volumeInfo.authors.reduce((prev, curr) => `${prev} ${curr}`);
      const isbn = val.volumeInfo.industryIdentifiers[0].identifier;

      const picture = val.volumeInfo.imageLinks.smallThumbnail;
      const pictureNormal = val.volumeInfo.imageLinks.thumbnail;
      const description = val.volumeInfo.description;

      const book = { title, authors, isbn, picture, pictureNormal, description };
      books.push(book);
    });

    dispatch(showResults(books, query));
  } else {
    dispatch(showResults([], null));
  }
})
.catch();
}
