import React , { Component } from 'react'
import UserinfoDrawer from './UserinfoDrawer.jsx'
import RaisedButton from 'material-ui/RaisedButton'

export default class ShowBooks extends Component {
  render(){
    return (
      <div>
          <UserinfoDrawer />
        <div style={showbook}>
          <p>
            Hello from ShowBooks
          </p>
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
  marginLeft : '26%',
  height : '1000px',
}
