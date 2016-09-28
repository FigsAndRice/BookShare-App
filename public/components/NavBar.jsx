import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { FlatButton, FontIcon, TextField } from 'material-ui'
import { yellow600 } from 'material-ui/styles/colors'
import Logout from 'material-ui/svg-icons/action/exit-to-app';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import Dash from 'material-ui/svg-icons/action/dashboard';
import { logout } from '../actions/UserActions';

import SearchBar from './SearchBar'

const barStyle = {
  backgroundColor: yellow600
}

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-default" style={barStyle}>
        <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapsable-buttons" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="collapsable-buttons">
          <ul className="nav navbar-nav">
            <li><Link to="/profile"><FlatButton label='Profile' icon={<Dash />} /></Link></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            {/* <li><SearchBar /></li> */}
            <li><Link to="/"><FlatButton label='Cart' icon={<ShoppingCart />} /></Link></li>
            <li><Link to="/"><FlatButton onClick={this.props.logout} label='Logout' icon={<Logout />}/></Link></li>
          </ul>
        </div>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: (state) => {dispatch(logout(state))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
