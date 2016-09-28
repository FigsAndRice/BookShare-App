import React from 'react';
import {List, ListItem, FloatingActionButton, FontIcon} from 'material-ui';
import {yellow600, amber600, lightBlue900} from 'material-ui/styles/colors';

import axios from 'axios';

const GOOGLE_BOOKS = 'https://www.googleapis.com/books/v1/volumes?q='

class Results extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        	results: null 
        }
        this.displayName = 'Results';
    }

    componentDidMount() {
    	let {query} = this.props.params;
    	let url = GOOGLE_BOOKS + query;
    
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
	        	})
	        }
	        else {
	        	this.setState({
	        		results: []
	        	});
	        }
	      })
	      .catch(error => console.error);

    }
    render() {
    		let {results} = this.state;
    		let actionStyle = {
    			marginTop: "45px"
    		}
    		//let img = <img className="img-responsive" src="http://books.google.com/books/content?id=RJxWIQOvoZUC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE71ema0EayCQkQ7HS2nqnUVvLP_t80kSWA011JCg8atZRt7cG3cN8Sxm-fB3eA5di9GXySS2MWFHKbEnz4yBmjFJOnaVykxstmbqPKuNqTccj1GRCaj4wcAy5bPIy6dyvy6RItY8&source=gbs_api" />
        
        if (results) {
        	if (results.length) {

        	} else {
        		return <h1>Sorry Book were not found 😔</h1>
        	}
        }
        else return <div></div>;
    }
}

export default Results;


