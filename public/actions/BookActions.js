import { browserHistory } from 'react-router';
import axios from 'axios';

export function searchBooks(isbn) {
	return dispatch => {
		axios.get(`/api/books/${isbn}`)
			.then(res => dispatch(searchedBooks(res.data)))
			.catch(console.error)
	}
}

export function searchedBooks(books) {
	return {
		type: 'SEARCHED_BOOKS',
		payload: { books }
	}
}

export function userBooks(books) {
	return {
		type: 'USER_BOOKS',
		payload: { books }
	}
}

export function getBook(book) {
	browserHistory.push('/book');
	return {
		type: 'GET_BOOK',
		payload: {book}
	}
}

export function addBook(book, userId) {
	let { isbn, title, authors, pictureNormal } = book;
	let newBook = { isbn, title, author: authors, cover: pictureNormal, owner: userId };
	return dispatch => {
		axios.post(`/api/books`, newBook)
			.then(res => getBook(res.data))
			.catch(console.error)
	}
}

export function changeOwner(bookId, userId) {
	return dispatch => {
		axios.put(`/api/books/${bookId}/changeOwner/${userId}`)
			.then(res => {
				console.log(res.data);
			})
			.catch(console.error)
	}
}

export function getUserBooks(userId) {
	return dispatch => {
		axios.get(`/api/books/owner/${userId}`)
			.then(res => {
				dispatch(userBooks(res.data));
			})
			.catch(console.error)
	}
}
