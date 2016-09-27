import React , { Component } from 'react'
// import Drawer from './DrawerUser.jsx'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';


export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  // handleToggle = () =>{
  //   this.setState({open: !this.state.open});
  // }

  render(){
    return (
      <div>
        <p>Hello from UserProfile</p>
        <RaisedButton
          label="Toggle Drawer"
          onTouchTap={this.handleToggle}
        />
        <Drawer open={this.state.open}>
          <MenuItem>X</MenuItem>
          <MenuItem>Menu Items</MenuItem>
        </Drawer>
      </div>
    );
  }
}
