import React , { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import UserinfoDrawer from './UserinfoDrawer.jsx'
import Book from './Book.jsx'
import UserProfile from './UserProfile.jsx'


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
        return <Book key={index+1} book={book}/>
      })
    }
    return (
      <div>
        <div className="mobileProfile">
          <UserProfile />
        </div>
        <UserinfoDrawer />
        <div className="showbook">
          <div>
            {bookView}
          </div>
        </div>
      </div>
    );
  }
}

const sideBar = {
  paddding : 3,
  margin: 0,
  width : '25%',
  backgroundColor : '#f1f1f1' ,
  height : '100%' ,
  position: 'fixed' ,
  overflow: 'auto',
};
