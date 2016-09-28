import {browserHistory} from 'react-router';
export function getBook(book) {
	browserHistory.push('/book');
	return {
		type: 'GET_BOOK',
		payload: {book}
	}
}