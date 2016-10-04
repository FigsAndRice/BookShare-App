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

import { getUserBooks } from '../../actions/BookActions';
import { receiveUser } from '../../actions/UserActions';
import Book from './Book.jsx';
import Favorite from './Favorite.jsx';

class ShowBooks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: []
    };
  }

  componentDidMount() {
    const user = JSON.parse(localStorage.user);
    this.props.getUserBooks(user._id);
    this.props.receiveUser(user);
  }

  render() {
    let bookStatus;
    let bookView;
    if (!this.props.userBooks) {
      bookView = (
        <div>
          <h3>No Books</h3>
        </div>
      );
      bookStatus = '';
    } else {
      const { userBooks, user } = this.props;
      bookView = userBooks.map((book, index) => {
        return <Book key={index + 1} book={book} userId={user._id} />;
      });
      bookStatus = 'Your Books';
    }

    let favoriteView;
    let favoriteStatus;
    if (this.props.showFav) {
      let favorites;
      if (!this.props.user.favorites) {
        favoriteStatus = '';
        favoriteView = <div />;
      } else {
        const { user } = this.props;
        favorites = this.props.user.favorites;
        if (favorites.length > 0) {
          favoriteStatus = 'Your Favorites';
          favoriteView = favorites.map((favorite, index) => {
            return <Favorite key={index} favorite={favorite} userId={user._id} />;
          });
        } else {
          favoriteStatus = '';
          favoriteView = <div />;
        }
      }
    } else {
      favoriteView = <div />;
    }

    return (
      <div className="showbook container">
        <div className="row">
          <h1>{favoriteStatus}</h1>
          {favoriteView}
        </div>
        <div className="row">
          <h1>{bookStatus}</h1>
          {bookView}
        </div>
      </div>
    );
  }
}

const mapStateTopProps = (state) => {
  return {
    user: state.user,
    userBooks: state.books.userBooks,
    showFav: state.showFav
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserBooks: (userId) => { dispatch(getUserBooks(userId)); },
    receiveUser: (user) => { dispatch(receiveUser(user)); }
  };
};

export default connect(mapStateTopProps, mapDispatchToProps)(ShowBooks);
