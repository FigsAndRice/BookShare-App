import React from 'react';
import { Link } from 'react-router';
import { AppBar, Tabs,  Tab, FontIcon, TextField } from 'material-ui'

const NavBar = () => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
          <a className="navbar-brand glyphicon glyphicon-heart-empty"></a>
      </div>
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/albums">Albums</Link></li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
        </ul>
      </div>
    </div>
  </nav>
)

export default NavBar;
