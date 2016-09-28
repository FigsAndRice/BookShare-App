import {browserHistory} from 'react-router';
export function getBook(book) {
	browserHistory.push('/books');
	return {
		type: 'GET_BOOK',
		payload: {book}
	}
}