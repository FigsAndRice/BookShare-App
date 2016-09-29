import {browserHistory} from 'react-router';
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

export function getBook(book) {
	browserHistory.push('/book');
	return {
		type: 'GET_BOOK',
		payload: {book}
	}
}

export function changeOwner(bookId, ownerId) {
	return dispatch => {
		axios.put(`/api/books/${bookId}/changeOwner/${ownerId}`)
			.then(res => {
				console.log(res.data);
			})
			.catch(console.error)
	}
}
