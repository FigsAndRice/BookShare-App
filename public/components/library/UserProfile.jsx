import React , { Component } from 'react';
import { connect } from 'react-redux';
import { RaisedButton, Drawer, MenuItem, Paper} from 'material-ui';
import Favorite from 'material-ui/svg-icons/action/favorite'
import Edit from 'material-ui/svg-icons/editor/mode-edit'


class UserProfile extends Component {
  constructor(props){
    super(props);
  }

  render(){
    let { username , email ,firstName ,lastName ,phone ,picture } = this.props.user;

    return (
        <div style={drawerContext}>
          <div>
              <img style={imgstyle} src={picture} alt="Profile pic"/>
              <h3>{firstName}</h3>
              <h3>{lastName}</h3>
              <p>{email}</p>
              <RaisedButton label='Profile' icon={<Edit />} primary={true} />
              <RaisedButton label='Favs' icon={<Favorite />} secondary={true} />
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);


const imgstyle = {
  border: '0px solid',
  borderRadius: 100,
  boxShadow: '0px 5px 15px #848484',
  height: 170,
  width: 170,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const drawerContext = {
  margin: 7,
  padding: 15,
  width : '95%',
};
