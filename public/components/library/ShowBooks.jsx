import React , { Component } from 'react'
import UserProfile from './UserProfile.jsx'

export default class ShowBooks extends Component {
  render(){
    return (
      <div>
        <div style={showbook} >
          <UserProfile />
        </div>
        <div>
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
  marginLeft : '256px',
  height : '1000px',
}
