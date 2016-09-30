import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { RaisedButton } from 'material-ui';

import Profile from './user/Profile.jsx'

const COOKIE_LOGIN = 'connect.sid';
const getCookie = (name) => {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
};


class Main extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'Main';
    }
    render() {
      let mainView;
      console.log(getCookie(COOKIE_LOGIN))
      if(!getCookie(COOKIE_LOGIN)){
        mainView = (
          <div className="splash">
            <h1 className="splashTitle">Book Finder</h1>
            <Link to='/login'><RaisedButton style={btnStyle} label='Login'/></Link>
            <Link to='/register'><RaisedButton style={btnStyle} label='Register'/></Link>
          </div>
        )
      } else {
        mainView = (
          <Profile />
        )
      }
        return (
          <div>
            {mainView}
          </div>
        )
    }
}


export default connect(state => ({
  user: state.user
  }),
  dispatch => ({

  })
)(Main);

const btnStyle = {
  margin : 2,
}
