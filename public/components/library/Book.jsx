import React , { Component } from 'react';
import { connect } from 'react-redux';
import { RaisedButton } from 'material-ui';

import RouteActions from '../../actions/RouteActions'

import { deleteBook } from '../../actions/BookActions';

class Book extends Component{
  constructor(props) {
    super(props);

    this._delete = this._delete.bind(this);
  }

  _delete(bookId, userId) {
    this.props.deleteBook(bookId, userId);
  }

  _editBook(id){
    RouteActions.route(`/edit/${id}`);
  }

  render(){

    let { title, cover, picture, author, forSale, _id, price } = this.props.book
    let picUrl = (picture === undefined) ? cover : picture;
    let status = forSale ? '$' + price.toFixed(2) : "Not For Sale"

    return(
    <div className="col-sm-4 col-md-4 col-lg-4 bookbox">
      <h5>{status}</h5>
      <img width="150px" className="img-rounded fixedBookHeight center-block" src={picUrl} alt="NO_IMG"/>
      <RaisedButton onClick={this._editBook.bind(null, _id)}>Edit</RaisedButton>
      <RaisedButton onClick={this._delete.bind(null, _id, this.props.userId)}>Delete</RaisedButton>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteBook: (bookId, userId) => {dispatch(deleteBook(bookId, userId))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Book);
