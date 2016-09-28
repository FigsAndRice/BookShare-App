import React , { Component } from 'react'
// import UserinfoDrawer from './UserinfoDrawer.jsx'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';


export default class UserProfile extends Component {

  render(){
    return (
        <div style={drawerContext}>
          <div >
              <img style={imgstyle} src="https://avatars1.githubusercontent.com/u/10319796?v=3&s=400" alt="Profile pic"/>
              <h3>Juan Carlos</h3>
              <p>Edit Profile</p>
              <p>Favourite Books</p>
          </div>
        </div>
    );
  }
}

const imgstyle = {
  border: '0px solid',
  borderRadius: 100,
  boxShadow: '0px 5px 15px #848484',
  height: 170,
  width: 170,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const drawerContext = {
  textAlign : 'center',
  margin: 7,
  padding: 15,
  width : '95%',
  // height : '90%',
  // backgroundColor : '#f1f1f1'
};
