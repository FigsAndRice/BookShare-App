import axios from 'axios';

//GOOGLE_BOOK url
const GOOGLE_BOOKS = 'https://www.googleapis.com/books/v1/volumes?q=';
//API_KEY for Google Book API
const API_KEY = '&key=AIzaSyAYnqQyGfVNTDzBa77PhNx4Rq9qhGNgD7A';


export function getResults(query) { 
	let url = GOOGLE_BOOKS + query + API_KEY 

	//get the results from google books
	return dispatch => {
		axios.get(url)
	      .then(res => res.data)
	      .then(data => {
	        if (data.items) {
	        	let {items} = data;
	        	let books = []
	        	items.forEach(val => {
	        		let title = val.volumeInfo.title;
	        		let authors = val.volumeInfo.authors.reduce((prev, curr) => prev + ' ' + curr)
	        		let isbn = val.volumeInfo.industryIdentifiers[0].identifier

	        		let picture = val.volumeInfo.imageLinks.smallThumbnail

	        		let book = {title, authors, isbn, picture}
	        		books.push(book);
	        	});

	        	dispatch(showResults(books))
	        }
	        else {
	        	dispatch(showResults([]))
	        }
	      })
	      .catch(error => console.error);
	};
}

export function showResults(results) {
	return {
		type:'GET_RESULTS',
    payload: {
      results
    }
	}
}