import React , { Component } from 'react';
import { connect } from 'react-redux';
import { RaisedButton } from 'material-ui';

import { removeFavorite, addToCart } from '../../actions/UserActions';

class Favorite extends Component{
  constructor(props) {
    super(props);

    this._addToCart = this._addToCart.bind(this);
    this._delete = this._delete.bind(this);
  }

  _addToCart(userId, bookId) {
    this.props.addToCart(userId, bookId);
  }

  _delete(userId, bookId) {
    this.props.removeFavorite(userId, bookId);
  }

  render(){
    let { cover, _id } = this.props.favorite;
    let picUrl = (cover === undefined) ? 'http://1615.info/images/red-book.jpg' : cover;

    return(
      <div className="col-sm-4 col-md-4 col-lg-4 bookbox">
        <img width="150px" className="img-rounded fixedBookHeight center-block" src={picUrl} alt="NO_IMG"/>
        <RaisedButton onClick={this._addToCart.bind(null, this.props.userId, _id)}>Add to Cart</RaisedButton>
        <RaisedButton onClick={this._delete.bind(null, this.props.userId, _id)}>Delete</RaisedButton>
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
    removeFavorite: (userId, bookId) => {dispatch(removeFavorite(userId, bookId))},
    addToCart: (userId, bookId) => {dispatch(addToCart(userId, bookId))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
