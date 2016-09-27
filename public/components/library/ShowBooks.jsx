import React , { Component } from 'react'
import UserProfile from './UserProfile.jsx'

export default class ShowBooks extends Component {
  render(){
    return (
      <div className="row">
        <div>
          <UserProfile />
        </div>
        <div style={showbook}>
          Hello from ShowBooks
        </div>
      </div>
    );
  }
}

const sideBar = {
  paddding : 3,
  margin: 0,
  width : '25%',
  backgroundColor : '#f1f1f1' ,
  height : '100%' ,
  position: 'fixed' ,
  overflow: 'auto',
};

const showbook = {
  // paddingLeft: 3,
  // marginLeft : '25%',
  height : '1000px',
}
