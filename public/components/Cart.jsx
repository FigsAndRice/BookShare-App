import React, { Component } from 'react';
import { connect } from 'react-redux';

import {Checkbox, IconButton, FloatingActionButton, FontIcon, RaisedButton, Snackbar} from 'material-ui';
import {yellow600, amber600, lightBlue900} from 'material-ui/styles/colors';
class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    }
    this.showMessage = this.showMessage.bind(this);
    this.hideMesaage = this.hideMesaage.bind(this);
  }

  showMessage() {
    this.setState({
      open: true,
    });
  }
  hideMesaage() {
    this.setState({
      open: false,
    });
  }
  render() {
    let { cart } = this.props;
    console.log ('cart:', cart);
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
            <tr>
              <td>
                <div className="row">
                  <div className="col-xs-4">
                    <img src={"http://books.google.com/books/content?id=tcSMCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"} className="img-responsive" />
                  </div>
                  <div className="col-xs-8">
                    <h2>Title: Harry</h2>
                    <h3>Author(s): JK Rowling</h3>
                    <h3>ISBN: 123456</h3>
          
                    <div className="row">
                      <div className="col-xs-1">
                        <FontIcon style={{color: amber600}} className='material-icons'>shopping_cart</FontIcon>
                      </div>
                      <div className="col-xs-1">
                        <Checkbox />
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <h3>$45.56</h3>
              </td>
              <td>
                <FloatingActionButton  style={{marginTop: "65px"}}iconStyle={{color: yellow600}}>
                  <FontIcon className='material-icons'>favorite </FontIcon>
                </FloatingActionButton>
              </td>
              <td>
                <FloatingActionButton style={{marginTop: "65px"}} iconStyle={{color: yellow600}}>
                  <FontIcon className='material-icons'>delete</FontIcon>
                </FloatingActionButton>
              </td>
            </tr>
             <tr>
              <td>
                <div className="row">
                  <div className="col-xs-4">
                    <img src={"http://books.google.com/books/content?id=tcSMCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"} className="img-responsive" />
                  </div>
                  <div className="col-xs-8">
                    <h2>Title: Harry</h2>
                    <h3>Author(s): JK Rowling</h3>
                    <h3>ISBN: 123456</h3>
          
                    <div className="row">
                      <div className="col-xs-1">
                        <FontIcon style={{color: amber600}} className='material-icons'>shopping_cart</FontIcon>
                      </div>
                      <div className="col-xs-1">
                        <Checkbox />
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <h3>$45.56</h3>
              </td>
              <td>
                <FloatingActionButton  style={{marginTop: "65px"}}iconStyle={{color: yellow600}}>
                  <FontIcon className='material-icons'>favorite </FontIcon>
                </FloatingActionButton>
              </td>
              <td>
                <FloatingActionButton style={{marginTop: "65px"}} iconStyle={{color: yellow600}}>
                  <FontIcon className='material-icons'>delete</FontIcon>
                </FloatingActionButton>
              </td>
            </tr>
            <tr>
              <td>
                <div className="row">
                  <div className="col-xs-4">
                    <img src={"http://books.google.com/books/content?id=tcSMCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"} className="img-responsive" />
                  </div>
                  <div className="col-xs-8">
                    <h2>Title: Harry</h2>
                    <h3>Author(s): JK Rowling</h3>
                    <h3>ISBN: 123456</h3>
          
                    <div className="row">
                      <div className="col-xs-1">
                        <FontIcon style={{color: amber600}} className='material-icons'>shopping_cart</FontIcon>
                      </div>
                      <div className="col-xs-1">
                        <Checkbox />
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <h3>$45.56</h3>
              </td>
              <td>
                <FloatingActionButton  onTouchTap={this.showMessage} style={{marginTop: "65px"}}iconStyle={{color: yellow600}}>
                  <FontIcon className='material-icons'>favorite </FontIcon>
                </FloatingActionButton>
              </td>
              <td>
                <FloatingActionButton style={{marginTop: "65px"}} iconStyle={{color: yellow600}}>
                  <FontIcon className='material-icons'>delete</FontIcon>
                </FloatingActionButton>
              </td>
            </tr> 
          </tbody>
        </table>
        <RaisedButton
          label="Checkout"
          primary={false}
          style={{float: "right"}}
          labelColor={yellow600}
          backgroundColor={lightBlue900}
          icon={<FontIcon className="material-icons">check_circle</FontIcon>}
        />
        <h4 style={{float: "right", marginRight: "15px"}}><b>Subtotal (2 items): $53.84</b></h4>

        <Snackbar
          open={this.state.open}
          message= "Book added to favorite."
          autoHideDuration={4000}
          onRequestClose={this.hideMesaage}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.user.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (state) => dispatch(getUser(state))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
