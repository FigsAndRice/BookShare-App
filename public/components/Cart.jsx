import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getOwner } from '../actions/OwnerActions';

class Cart extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getOwner();
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
  getOwner: () => dispatch(getOwner())
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
