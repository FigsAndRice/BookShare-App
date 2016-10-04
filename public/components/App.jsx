import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavBar from './navbar/NavBar.jsx';
import { receiveUser } from '../actions/UserActions';

const COOKIE_LOGIN = 'connect.sid';
const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
};

class App extends Component {
  constructor(props) {
    super(props);
    this.displayName = 'App';
  }
  componentDidMount() {
    const user = JSON.parse(localStorage.user);
    this.props.receiveUser(user);
  }
  render() {
    let appView;

    if (!getCookie(COOKIE_LOGIN)) {
      appView = (
        <div/>
      );
    } else {
      appView = (
        <NavBar />
      );
    }

    return (
      <div>
        {appView}
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveUser: (user) => { dispatch(receiveUser(user)) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
