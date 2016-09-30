import React , { Component } from 'react';
import { connect } from 'react-redux';
import { FontIcon, FloatingActionButton } from 'material-ui';

import { getUserBooks } from '../../actions/BookActions';
import {receiveUser} from '../../actions/UserActions';
import Book from './Book.jsx';

class ShowBooks extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {  
    let user = JSON.parse(localStorage.user)
    this.props.receiveUser(user);     
  }

  render(){
    console.log('state from show books ', this.props.user)
    let bookView;
    if(!this.props.userBooks){
      bookView = (
        <div>
          <h3>No Books</h3>
        </div>
      )
    } else {
      let { userBooks, user } = this.props
      bookView = userBooks.map((book, index) => {
        return <Book key={index+1} book={book} userId={ user._id }/>
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
    getUserBooks: (userId) => {dispatch(getUserBooks(userId))},
    receiveUser: (user) =>  {dispatch(receiveUser(user))},
  }
}

export default connect(mapStateTopProps, mapDispatchToProps)(ShowBooks)
