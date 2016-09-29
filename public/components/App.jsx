import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavBar from './navbar/NavBar.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'App';
    }
    render() {
      let appView;

      if(!this.props.user){
        appView = (
        <div></div>
        )
      } else {
        appView = (
        <NavBar />
        )
      }

      return (
        <div>
        {appView}
        {this.props.children}
        </div>
      )
    }
}

export default connect(state => ({
  user: state.user
  }),
  dispatch => ({

  })
)(App);
