import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserinfoDrawer from './UserinfoDrawer.jsx'
import ShowBooks from './ShowBooks.jsx'

export default class Profile extends Component {
  render(){
    return(
      <div>
        <div className="col-xs-3">
          <UserinfoDrawer />
        </div>
        <div className="col-xs-9">
          <ShowBooks />
        </div>
      </div>
    )
  }
}
