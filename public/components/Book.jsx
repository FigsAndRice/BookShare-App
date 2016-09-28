import React, { Component } from 'react';

import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Avatar from 'material-ui/Avatar';

const styles = {
  bookCover: {
    "width": "100%"
  },
  userBook: {
    "backgroundColor": "lightgray",
    "margin": "10px 10px 10px 10px",
    "width": "100%"
  },
  userBookText: {
    "paddingTop": "20px"
  },
  gridTile: {
    "maxWidth": "80%",
    "borderRadius": "20px"
  }
}

class Book extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: []
    }
  }

  componentDidMount() {
    this.setState({
      books: [
        {owner: "Danny", email: "danny@example.com", condition: "horrible"},
        {owner: "Juan", email: "juancafe@example.com", condition: "brand new"}
    ]
    })
  }

  render() {
    const userBooks = this.state.books.map((book, index) => {
      return (
        <ListItem>
          <div className="row">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <img src="http://67.media.tumblr.com/895efa32f439693be6b5ebbc9ad8afd8/tumblr_inline_nfmpciJcWi1t5wowo.jpg" style={styles.gridTile}/>
            </div>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <h5>Owned by: {book.owner}</h5>
              <h5>Email: {book.email}</h5>
              <h5>Condition: {book.condition}</h5>
            </div>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-right">
              <FloatingActionButton>
                <ContentAdd/>
              </FloatingActionButton>
            </div>
          </div>
        </ListItem>
    )
    })

    return (
      <div className='container text-center'>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <h1>Title</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-3">
          </div>
          <div className="col-sm-12 col-md-8 col-lg-9">
            <h2>Description</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-3">
            <img style={styles.bookCover} src="https://upload.wikimedia.org/wikipedia/en/b/bf/Harry_Potter_and_the_Sorcerer's_Stone.jpg"/>
          </div>
          <div className="col-sm-12 col-md-8 col-lg-9 text-left">
            <h4>Author: </h4>
            <h4>Synopsis: </h4>
            <h4>ISBN: </h4>
            <h4>Price (New): </h4>
            <br/>
            <List>
              <Subheader>For Sale by Other Students</Subheader>
              {userBooks}
            </List>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Book;
