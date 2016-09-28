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
        this.getResults = this.getResults.bind(this);
    }

    getResults() {
    	console.log('mounting...')
    	let {query} = this.props.params;
    	let url = GOOGLE_BOOKS + query + '&key=AIzaSyAYnqQyGfVNTDzBa77PhNx4Rq9qhGNgD7A';
    
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

	        	this.setState({
	        		results: books
	        	});
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
    		this.getResults();
    		let {results} = this.state;
    		let actionStyle = {
    			marginTop: "45px"
    		}
    	
        if (results) {
        	if (results.length) {

        		let lists = results.map(book => {
        			var img = <img className="img-responsive" src={book.picture} />
        			return <ListItem style={{borderStyle: "solid", borderRadius: "15px", borderWidth: "1px", borderColor: amber600, marginBottom: "10px"}}>
		        			<div className="row">
		        				<div className="col-xs-2">{img}</div>
		  							<div className="col-xs-8">
		  								<h2>Title: {book.title}</h2>
		  								<h3>Author(s): {book.authors}</h3>
		  								<h3>ISBN: {book.isbn	}</h3>
		  							</div>
		  							<div className="col-xs-2">
		  								<FloatingActionButton  style={actionStyle} iconStyle={{color: "#FBC02D "}}>
		      							<FontIcon className='material-icons'>arrow_forward</FontIcon>
		    							</FloatingActionButton>
		  							</div>
		        			</div>
        			</ListItem>
        		})
        		return <List>
        				{lists}
        			</List>
        	} else {
        		return <h1>Sorry Book were not found 😔</h1>
        	}
        }
        else return <div></div>;
    }
}

export default Results;


