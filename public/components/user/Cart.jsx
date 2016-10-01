  import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Checkbox, IconButton, FloatingActionButton, FontIcon, RaisedButton, Snackbar } from 'material-ui';
import { yellow600, amber600, lightBlue900 } from 'material-ui/styles/colors';

import { addFavorite, removeFromCart, receiveUser } from '../../actions/UserActions';
import Checkout from '../Checkout.jsx';


class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      purchase: [],
    }

    this._addFavorite = this._addFavorite.bind(this);
    this.showMessage = this.showMessage.bind(this);
    this.hideMessage = this.hideMessage.bind(this);
    this._addPurchase = this._addPurchase.bind(this);
    this._checkOut = this._checkOut.bind(this);
  }

  componentDidMount() {
    let user = JSON.parse(localStorage.user)
    this.props.receiveUser(user);
  }

  _addFavorite(bookId) {
    this.props.addFavorite(this.props.user._id, bookId);

    this.showMessage();
  }

  showMessage() {
    this.setState({
      open: true,
    });
  }

  hideMessage() {
    this.setState({
      open: false
    });
  }

  _removeFromCart(bookId) {
    this.props.removeFromCart(this.props.user._id, bookId);
  }

  _addPurchase(e) {
    let purchaseList = this.state.purchase;
    let index = purchaseList.indexOf(e.target.dataset.bookid)
    if (e.target.checked) {
      if (index <= -1) {
        purchaseList.push(e.target.dataset.bookid)
      }
    } else {
      if (index > -1) {
        purchaseList.splice(index, 1);
      }
    }
    this.setState({purchase: purchaseList})
  }

  _checkOut() {
    // ADD LOGIC TO CHECKOUT AND GO TO STRIPE
    console.log ('this.state.purchase:', this.state.purchase)
  }

  render() {

    let { cart } = this.props.user;
    let totalPrice = 0;
    let CartItems;
    let numItems = 0;
    if (cart.length > 0) {
      numItems = cart.length;

      cart.forEach(item => {
        if (item.price > 0) {
          totalPrice += item.price;
        }
      })

      CartItems = cart.map((item, index) => {
        let price;
        let url;
        if (item.price) {
          price = <h3>{item.price}</h3>
        } else {
          price = <h3>$0.00</h3>
        }

        if (item.picture.length > 0) {
          url = item.picture[0];
        } else {
          url = item.cover;
        }

        return (
          <tr key={index}>
            <td>
              <div className="row">
                <div className="col-xs-4">
                  <img src={url} className="img-responsive" />
                </div>
                <div className="col-xs-8">
                  <h2>Title: {item.title}</h2>
                  <h3>Author(s): {item.author}</h3>
                  <h3>ISBN: {item.isbn}</h3>

                  <div className="row">
                    <div className="col-xs-1">
                      <FontIcon style={{color: amber600}} className='material-icons'>shopping_cart</FontIcon>
                    </div>
                    <div className="col-xs-1">
                      <Checkbox
                        data-bookId={item._id}
                        onCheck={this._addPurchase}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </td>
            <td>
              {price}
            </td>
            <td>
              <FloatingActionButton onTouchTap={this._addFavorite.bind(this, item._id)} style={{marginTop: "65px"}}iconStyle={{color: yellow600}}>
                <FontIcon className='material-icons'>favorite</FontIcon>
              </FloatingActionButton>
            </td>
            <td>
              <FloatingActionButton onTouchTap={this._removeFromCart.bind(this, item._id)} style={{marginTop: "65px"}} iconStyle={{color: yellow600}}>
                <FontIcon className='material-icons'>delete</FontIcon>
              </FloatingActionButton>
            </td>
          </tr>
        )
      })
    } else {
      CartItems = <tr></tr>
    }

    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th><h3>Shopping Cart</h3></th>
              <th>Price</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {CartItems}
          </tbody>
        </table>
        <Checkout />
        <h4 style={{float: "right", marginRight: "15px"}}><b>Subtotal ({numItems} items): ${totalPrice}</b></h4>

        <Snackbar
          open={this.state.open}
          message= "Book added to favorite."
          autoHideDuration={3000}
          onRequestClose={this.hideMessage}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    receiveUser: (state) => {dispatch(receiveUser(state))},
    addFavorite: (userId, bookId) => {dispatch(addFavorite(userId, bookId))},
    removeFromCart: (userId, bookId) => {dispatch(removeFromCart(userId, bookId))},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
