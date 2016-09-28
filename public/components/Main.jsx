import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { RaisedButton } from 'material-ui';

import UserProfile from './library/ShowBooks.jsx'

class Main extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'Main';

    }
    render() {
      let mainView;
      console.log('this.props.user:', this.props.user)
      if(!this.props.user){
        mainView = (
          <div className="splash">
            <h1>Book Finder</h1>
            <Link to='/login'><RaisedButton label='Login'/></Link>
            <Link to='/register'><RaisedButton label='Register'/></Link>
          </div>
        )
      } else {
        mainView = (
          <UserProfile />
        )
      }
        return (
          <div>
            {mainView}
          </div>
        )
    }
}


export default connect(state => ({
  user: state.user
  }),
  dispatch => ({

  })
)(Main);
