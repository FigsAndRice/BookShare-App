import React, { Component } from 'react';
import { connect } from 'react-redux';

class Main extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'Main';

    }
    render() {
        return <h1>This is the Splash Page</h1>
    }
}


export default connect(state => ({
  user: state.user
  }),dispatch => {
  })(Main);
