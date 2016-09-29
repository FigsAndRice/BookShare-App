import React , { Component } from 'react';
import { connect } from 'react-redux';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

class UserProfile extends Component {
  constructor(props){
    super(props);
  }

  render(){
    let { username , email , firstName , lastName , phone , picture , _id } = this.props.user;
    let imgURL = 'http://www.biglunchextras.com/sites/default/files/user-default.png';
    console.log("picture",picture);
    if (picture !== undefined){
        imgURL=picture;
    }
    // if (picture != "") {
    // }
    return (
        <div style={drawerContext}>
          <div>
              <img style={imgstyle} src={imgURL}/>
              <h3>{firstName}</h3>
              <h3>{lastName}</h3>
              <p>{email}</p>
              <Link to='/editProfile'>Profile Edit</Link>
              <p>Favourite Books</p>
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
  return {
  }
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
  textAlign : 'center',
  margin: 7,
  padding: 15,
  width : '95%',
};
