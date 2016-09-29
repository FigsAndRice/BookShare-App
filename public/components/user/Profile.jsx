import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserinfoDrawer from './UserinfoDrawer.jsx'
import UserProfile from './UserProfile.jsx'
import ShowBooks from '../library/ShowBooks.jsx'

export default class Profile extends Component {
  render(){
    return(
      <div>
        <div className="mobileProfile">
          <UserProfile />
        </div>
        <UserinfoDrawer />
        <ShowBooks />
      </div>
    )
  }
}
