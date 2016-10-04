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

import { removeFavorite, addToCart } from '../../actions/UserActions';

class Favorite extends Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
    this.delete = this.delete.bind(this);
  }

  addToCart(userId, bookId) {
    this.props.addToCart(userId, bookId);
  }

  delete(userId, bookId) {
    this.props.removeFavorite(userId, bookId);
  }

  render() {
    const { cover, _id } = this.props.favorite;
    const picUrl = (cover === undefined) ? 'http://1615.info/images/red-book.jpg' : cover;

    return (
      <div className="col-sm-4 col-md-4 col-lg-4 bookbox">
        <img width="150px" className="img-rounded fixedBookHeight center-block" src={picUrl} alt="NO_IMG" />
        <RaisedButton
          onClick={this.addToCart.bind(null, this.props.userId, _id)}
        >
          Add to Cart
        </RaisedButton>
        <RaisedButton
          onClick={this.delete.bind(null, this.props.userId, _id)}
        >
        Delete
        </RaisedButton>
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
    removeFavorite: (userId, bookId) => { dispatch(removeFavorite(userId, bookId)); },
    addToCart: (userId, bookId) => { dispatch(addToCart(userId, bookId)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
