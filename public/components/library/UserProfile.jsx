import React , { Component } from 'react'
import UserinfoDrawer from './UserinfoDrawer.jsx'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';


export default class UserProfile extends Component {

  render(){
    return (
      <div>
      <p>Hello from UserProfile</p>
      <UserinfoDrawer />
      </div>
    );
  }
}
