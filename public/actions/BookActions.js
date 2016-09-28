export function getBook(book) {
	return {
		type: 'GET_BOOK',
		payload: book
	}
}