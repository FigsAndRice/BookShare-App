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
      if(!this.props.user){
        mainView = (
          <div className="splash">
            {/* <div style={splashContext}> */}
              <h1 className="splashTitle">Book Finder</h1>
              <Link to='/login'><RaisedButton style={btnStyle} label='Login'/></Link>
              <Link to='/register'><RaisedButton style={btnStyle} label='Register'/></Link>
            {/* </div> */}
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

const splashContext = {
  backgroundColor : 'rgba(0,0,0,0.23)',
  boxShadow : '3px 3px 0px #FDD835',
  border : '5px solid #01579B',
  paddingBottom : '20px',
  width : 600,
  margin : 'auto'
};

const btnStyle = {
  margin : 2,
}
