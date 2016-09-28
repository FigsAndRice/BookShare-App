import React , { Component } from 'react'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import { FlatButton, FontIcon, TextField } from 'material-ui';
import { yellow600 } from 'material-ui/styles/colors';
import Dash from 'material-ui/svg-icons/action/dashboard';
import UserProfile from './UserProfile.jsx'


export default class UserinfoDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
    this.handleToggle=this.handleToggle.bind(this);
  }
  handleToggle() {
    console.log("sss");
    this.setState({open: !this.state.open});
  }
  render(){
    return (
      <div>
          <Drawer>
            <MenuItem style={title}><Link to="/profile"><FlatButton label='Profile' icon={<Dash />} /></Link></MenuItem>
            <UserProfile/>
          </Drawer>
      </div>
    );
  }
}


const title = {
  backgroundColor : yellow600,
  height : 68,
};
