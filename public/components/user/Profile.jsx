/* eslint-disable import/extensions */
/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';

import UserinfoDrawer from './UserinfoDrawer.jsx';
import ShowBooks from '../library/ShowBooks.jsx';
import UserProfile from './UserProfile.jsx';

export default class Profile extends Component {
  render() {
    return (
      <div>
        <div className="mobileProfile">
          <UserProfile />
        </div>
        <UserinfoDrawer />
        <ShowBooks />
      </div>
    );
  }
}
