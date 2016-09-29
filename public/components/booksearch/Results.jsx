import React from 'react';
import { connect } from 'react-redux';

import { List, ListItem, FloatingActionButton, FontIcon } from 'material-ui';
import { yellow600, amber600, lightBlue900 } from 'material-ui/styles/colors';

import { getBook, searchBooks } from '../../actions/BookActions';

class Results extends React.Component {
    constructor(props) {
        super(props);

        this.displayName = 'Results';
        this.selectBook = this.selectBook.bind(this);
    }

    selectBook(book) {
      this.props.searchBooks(book.isbn);
      this.props.getBook(book);
    }
    render() {
    	let { results } = this.props;
    		let actionStyle = {
    			marginTop: "45px"
    		}

        if (results) {
        	if (results.length) {

        		let lists = results.map((book, index	) => {
        			var img = <img className="img-responsive" src={book.picture} />
        			return <ListItem key={index + 1} style={{borderStyle: "solid", borderRadius: "15px", borderWidth: "1px", borderColor: amber600, marginBottom: "10px"}}>
		        			<div className="row">
		        				<div className="col-xs-2">{img}</div>
		  							<div className="col-xs-8">
		  								<h2>Title: {book.title}</h2>
		  								<h3>Author(s): {book.authors}</h3>
		  								<h3>ISBN: {book.isbn	}</h3>
		  							</div>
		  							<div className="col-xs-2">
		  								<FloatingActionButton onClick={this.selectBook.bind(null, book)} style={actionStyle} iconStyle={{color: "#FBC02D "}}>
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

export default connect(state => ({
  	results: state.results
	}),
	dispatch => {
    return {
      getBook: book => dispatch(getBook(book)),
      searchBooks: isbn => dispatch(searchBooks(isbn))
    }
})(Results)
