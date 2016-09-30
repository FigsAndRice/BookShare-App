import React , { Component } from 'react';
import { connect } from 'react-redux';
import { RaisedButton } from 'material-ui';

import { deleteBook } from '../../actions/BookActions'

export default class Book extends Component{
  render(){

    let { title, cover, author, forSale, _id } = this.props.book
    let picUrl = (cover === undefined) ? 'http://1615.info/images/red-book.jpg' : cover;

    return(
    <div className="col-sm-4 col-md-4 col-lg-4 bookbox">
      <img width="150px" className="img-rounded fixedBookHeight center-block" src={picUrl} alt="NO_IMG"/>

      <RaisedButton>Sell</RaisedButton>
      <RaisedButton onClick={deleteBook.bind(null, _id)}>Delete</RaisedButton>
    </div>
    )
  }
}
