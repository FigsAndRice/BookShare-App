import React , { Component } from 'react';
import { FontIcon, FloatingActionButton } from 'material-ui';

import Book from './Book.jsx';

export default class ShowBooks extends Component {
  render(){
    let bookView;
    if(!this.props.books){
      bookView = (
        <div>
          <h3>No Books</h3>
        </div>
      )
    } else {
      let { books } = this.props
      bookView = books.map((book, index) => {
        return <Book key={index+1} book={book} />
      })
    }
    return (
      <div className="showbook">
        <div>
          {bookView}
        </div>
      </div>
    );
  }
}
