import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavBar from './navbar/NavBar.jsx';

const COOKIE_LOGIN = 'connect.sid';
const getCookie = (name) => {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
};
class App extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'App';
    }
    render() {
      let appView;

      if(!getCookie(COOKIE_LOGIN)){
        appView = (
        <div></div>
        )
      } else {
        appView = (
        <NavBar />
        )
      }

      return (
        <div>
        {appView}
        {this.props.children}
        </div>
      )
    }
}

export default connect(state => ({
  user: state.user
  }),
  dispatch => ({

  })
)(App);
