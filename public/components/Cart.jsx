import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUser } from '../actions/UserActions';

class Cart extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getUser();
  }

  render() {
    let { cart } = this.props;
    return (

    )
  }
}

const mapStateToProps = (state) => {
  cart: state.user.cart
}

const mapDispatchToProps = () => {
  getUser: () => dispatch(getUser())
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
