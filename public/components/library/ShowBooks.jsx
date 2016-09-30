import React , { Component } from 'react';
import { connect } from 'react-redux';
import { FontIcon, FloatingActionButton } from 'material-ui';

import { getUserBooks } from '../../actions/BookActions';

import Book from './Book.jsx';

class ShowBooks extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.getUserBooks(this.props.user._id)
  }
  render(){
    let bookView;
    if(!this.props.userBooks){
      bookView = (
        <div>
          <h3>No Books</h3>
        </div>
      )
    } else {
      let { userBooks } = this.props
      bookView = userBooks.map((book, index) => {
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

const mapStateTopProps = (state) => {
  return {
    user: state.user,
    userBooks: state.books.userBooks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserBooks: (userId) => {dispatch(getUserBooks(userId))}
  }
}

export default connect(mapStateTopProps, mapDispatchToProps)(ShowBooks)
