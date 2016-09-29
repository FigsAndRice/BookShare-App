import { Link } from 'react-router';
import React , { Component } from 'react'
import { RaisedButton, FlatButton, FontIcon, TextField, Drawer, MenuItem } from 'material-ui';
import { yellow600 } from 'material-ui/styles/colors';
import Home from 'material-ui/svg-icons/action/home';
import UserProfile from './UserProfile.jsx'


export default class UserinfoDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
    this.handleToggle=this.handleToggle.bind(this);
  }
  handleToggle() {
    this.setState({open: !this.state.open});
  }
  render(){
    return (
      <div>
        <Drawer className="drawerStyle">
          <MenuItem style={title}><Link to="/"><FlatButton label='Home' icon={<Home />} /></Link></MenuItem>
          <UserProfile />
        </Drawer>
      </div>
    );
  }
}


const title = {
  backgroundColor : yellow600,
  height : 68,
};
