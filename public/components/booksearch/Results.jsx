/* eslint-disable import/extensions */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-children-prop */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-boolean-value */

import React from 'react';
import { connect } from 'react-redux';
import { List, ListItem, FloatingActionButton, FontIcon } from 'material-ui';
import { amber600 } from 'material-ui/styles/colors';

import { getBook, searchBooks } from '../../actions/BookActions';
import { getResults } from '../../actions/ResultsActions';

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Results';
    this.selectBook = this.selectBook.bind(this);
  }

  componentDidMount() {
    if (!this.props.results) {
      this.props.getResults(this.props.params.query);
    }
  }

  selectBook(book) {
    this.props.getBook(book);
  }

  render() {
    const { results } = this.props;
    const actionStyle = {
      marginTop: '45px'
    };

    if (results) {
      if (results.length) {
        const lists = results.map((book, index) => {
          const img = <img className="img-responsive" src={book.picture} role="presentation" />;
          return (
            <ListItem key={index + 1} style={{ borderStyle: 'solid', borderRadius: '15px', borderWidth: '1px', borderColor: amber600, marginBottom: '10px' }}>
              <div className="row">
                <div className="col-xs-2">{img}</div>
                <div className="col-xs-8">
                  <h2>Title: {book.title}</h2>
                  <h3>Author(s): {book.authors}</h3>
                  <h3>ISBN: {book.isbn}</h3>
                </div>
                <div className="col-xs-2">
                  <FloatingActionButton onClick={this.selectBook.bind(null, book)} style={actionStyle} iconStyle={{ color: '#FBC02D' }}>
                    <FontIcon className="material-icons">arrow_forward</FontIcon>
                  </FloatingActionButton>
                </div>
              </div>
            </ListItem>
          );
        });
        return (
          <List>
            {lists}
          </List>
        );
      }
      return <h1>Sorry Book were not found 😔</h1>;
    }
    return <div />;
  }
}

export default connect(state => ({
  results: state.results
}),
(dispatch) => {
  return {
    getBook: book => dispatch(getBook(book)),
    searchBooks: isbn => dispatch(searchBooks(isbn)),
    getResults: query => dispatch(getResults(query))
  };
})(Results);
