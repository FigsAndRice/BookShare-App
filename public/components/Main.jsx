import React, { Component } from 'react';
import { connect } from 'react-redux';

class Main extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'Main';

    }
    render() {
      console.log('this.props:', this.props.user)
        return <h1>This is the Page</h1>
    }
}


export default connect(state => ({
  user: state.user
  }),
  dispatch => ({
  
  })
)(Main);
