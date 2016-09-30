import axios from 'axios';
import RouteActions from './RouteActions';

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
	RouteActions.route('/book');
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
			.then(RouteActions.route('/'))
			.catch(console.error)
	}
}


export function deleteBook(bookId, userId) {
	return dispatch => {
		axios.delete(`/api/books/${bookId}`)
			.then(res => {
				dispatch(getUserBooks(userId))
			})
			.catch(console.error)
	}
}

export function changeOwner(bookId, userId) {
	return dispatch => {
		axios.put(`/api/books/${bookId}/changeOwner/${userId}`)
			.then(res => {
				dispatch(getUserBooks(userId));
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
