import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FloatingActionButton, AppBar, FontIcon, RaisedButton, List, ListItem, Subheader, Divider } from 'material-ui';
import { yellow600, amber600, lightBlue900 } from 'material-ui/styles/colors';

import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import { addToCart, addFavorite, getUser, receiveUser} from '../../actions/UserActions';
import { addBook, searchBooks, getBook } from '../../actions/BookActions';

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
    "maxWidth": "50%",
    "borderRadius": "20px",
    "padding": "10px",
  }
}

class Book extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchedBooks: this.props.searchedBooks
    }

    this._addBook = this._addBook.bind(this);
    this._addToCart = this._addToCart.bind(this);
    this._addFavorite = this._addFavorite.bind(this);
  }

  componentDidMount() {
    let user = JSON.parse(localStorage.user)
    let book = JSON.parse(localStorage.book)
    this.props.receiveUser(user)
    this.setState({
      searchedBooks: this.props.searchedBooks
    });
    this.props.searchBooks(this.props.params.isbn);
    this.props.getBook(book);
  }

  _addBook() {
    this.props.addBook(this.props.book, this.props.user._id);
  }

  _addToCart(e) {
    this.props.addToCart(this.props.user._id, e.target.dataset.bookid);
  }

  _addFavorite(e) {
    this.props.addFavorite(this.props.user._id, e.target.dataset.bookid);
  }

  render() {
    let { book, searchedBooks } = this.props;

    const userBooks = searchedBooks.map((existingBook, index) => {
      let bookPicture;
      if (existingBook.picture.length) {
        bookPicture = <img src={existingBook.picture} className="img-responsive" style={styles.gridTile}/>
      } else {
        bookPicture = <img src={book.pictureNormal} className="img-responsive" style={styles.gridTile}/>
      }

      return (
      <ListItem key={index}>
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            {bookPicture}
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <h3>Owned by: {existingBook.owner.username}</h3>
            <h3>Email: {existingBook.owner.email}</h3>
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-right">
            <FloatingActionButton iconStyle={{color: "#FBC02D "}}>
              <FontIcon className='material-icons' onClick={this._addToCart} data-bookid={existingBook._id}>add</FontIcon>
            </FloatingActionButton>
            <FloatingActionButton iconStyle={{color: "#FBC02D "}}>
              <FontIcon className='material-icons' onClick={this._addFavorite} data-bookid={existingBook._id}>favorite</FontIcon>
            </FloatingActionButton>
          </div>
        </div>
      </ListItem>
      )
    })

    return (
      <div>
        <div className="container">
          <div className="row" style={{borderStyle: "solid", borderColor: amber600}}>
            <div style={{paddingTop: "20px"}}className="col-sm-2 col-md-2 col-md-offset-1 col-xs-offset-4">
              <img src={book.pictureNormal} className="img-responsive"/>
              <br />
              <br />
              <RaisedButton
                onClick={this._addBook}
                label="Add Book"
                primary={false}
                style={{float: "right"}}
                labelColor={yellow600}
                backgroundColor={lightBlue900}
                icon={<FontIcon className="material-icons">add</FontIcon>}
              />
            </div>
            <div className="col-md-9 col-sm-6">
              <div >
                <h1 className="text-center"><b>{book.title}</b></h1>
                <br/>
                <h4> <i>{book.description}</i></h4>
                <br/>
                <h4>Author(s): {book.authors}</h4>
                <h4>ISBN: {book.isbn}</h4>
              </div>
            </div>
          </div>
        </div>
        <div>
          <br/>
          <AppBar showMenuIconButton={false} title="Sale by Other Students"/>
          <List>
            {userBooks}
          </List>
        </div>
      </div>
    )
  }
}

export default connect(state => ({
    book: state.books.book,
    user: state.user,
    searchedBooks: state.searchedBooks
  }),
  dispatch => {
    return {
      addToCart: (userId, bookId) => {dispatch(addToCart(userId, bookId))},
      addFavorite: (userId, bookId) => {dispatch(addFavorite(userId, bookId))},
      addBook: (book, userId) => {dispatch(addBook(book, userId))},
      getUser: id => {dispatch(getUser(id))},
      receiveUser: user => {dispatch(receiveUser(user))},
      searchBooks: book => {dispatch(searchBooks(book))},
      getBook: book => {dispatch(getBook(book))}
    }
})(Book);
