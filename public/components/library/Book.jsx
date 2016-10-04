/* eslint-disable import/extensions */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-children-prop */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-boolean-value */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RaisedButton } from 'material-ui';

import RouteActions from '../../actions/RouteActions';

import { deleteBook } from '../../actions/BookActions';

class Book extends Component {
  constructor(props) {
    super(props);

    this.delete = this.delete.bind(this);
  }

  delete(bookId, userId) {
    this.props.deleteBook(bookId, userId);
  }

  editBook(id) {
    RouteActions.route(`/edit/${id}`);
  }

  render() {
    const { cover, picture, forSale, _id, price } = this.props.book;
    const picUrl = (picture === undefined) ? cover : picture;
    const status = forSale ? `$${price.toFixed(2)}` : 'Not For Sale';

    return (
      <div className="col-sm-4 col-md-4 col-lg-4 bookbox">
        <h5>{status}</h5>
        <img width="150px" className="img-rounded fixedBookHeight center-block" src={picUrl} alt="NO_IMG" />
        <RaisedButton onClick={this.editBook.bind(null, _id)}>Edit</RaisedButton>
        <RaisedButton onClick={this.delete.bind(null, _id, this.props.userId)}>Delete</RaisedButton>
      </div>
  );
  }
}

const mapStateToProps = (state) => {
  return {
    state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteBook: (bookId, userId) => { dispatch(deleteBook(bookId, userId)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);
