import React, { Component } from 'react';
import { connect } from 'react-redux';

class Cart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { cart } = this.props;
    console.log ('cart:', cart);
    return (
      <div></div>
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
