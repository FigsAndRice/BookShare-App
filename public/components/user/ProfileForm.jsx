import React , { Component} from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { TextField, RaisedButton } from 'material-ui'
import {yellow600, amber600, lightBlue900} from 'material-ui/styles/colors';

import { updateUser, receiveUser } from '../../actions/UserActions'
import { uploadImg } from '../../actions/ImageActions'

import ProfilePicUploader from './ProfilePicUploader.jsx'

class ProfileForm extends Component {
  constructor(props){
    super(props);

    let { username , firstName , lastName , email , phone} = this.props.user;
    this.state = {

        username,
        firstName,
        lastName,
        email,
        phone,

    }
    this._onInputChange = this._onInputChange.bind(this);
    this._updateProfile = this._updateProfile.bind(this);

  }

  componentDidMount() {
    let user = JSON.parse(localStorage.user)
    this.props.receiveUser(user);    
  }

  _onInputChange(e){
   let key = e.target.dataset.statekey;
   let value = e.target.value;

   this.setState({
       [key]: value
   });
  }

  _updateProfile(imgUrl){
    let { _id } = this.props.user;
    let updateObj = this.state;
    updateObj.picture = imgUrl;
    // console.log('updateObj', updateObj);
    this.props.updateUser(_id, updateObj);

  }
  render(){
    let { username , firstName , lastName , email , phone } = this.state;

    let imgUrl = this.props.image.url;

    return (
      <div className="container text-center">
        <div className="col-md-6">
          <ProfilePicUploader />
        </div>
        <div className="col-md-6">
          <form style={editform}>
            <div>
              <TextField
                id="text-field-default"
                onChange={this._onInputChange}
                data-statekey="username"
                defaultValue={username}
                floatingLabelText="User Name"
              /><br />
              <TextField
                id="text-field-default"
                onChange={this._onInputChange}
                data-statekey="firstName"
                defaultValue={firstName}
                floatingLabelText="First Name"
              /><br />
              <TextField
                id="text-field-default"
                onChange={this._onInputChange}
                data-statekey="lastName"
                defaultValue={lastName}
                floatingLabelText="Last Name"
              /><br />
              <TextField
                id="text-field-default"
                onChange={this._onInputChange}
                data-statekey="email"
                defaultValue={email}
                floatingLabelText="Email"
              /><br />
              <TextField
                id="text-field-default"
                onChange={this._onInputChange}
                data-statekey="phone"
                defaultValue={phone}
                floatingLabelText="Phone"
              />
            </div>
            <RaisedButton backgroundColor={amber600} label="Update" style={style1} onClick={this._updateProfile.bind(null, imgUrl)}/>
            <Link to="/"><RaisedButton backgroundColor={yellow600} label="cancel" style={style1}/></Link>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user : state.user,
    image : state.image
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (id,state) => {dispatch(updateUser(id,state))},
    uploadImg: (imgfile) => {dispatch(uploadImg(imgfile))},
    receiveUser: (user) => {dispatch(receiveUser(user))}

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);

const editform = {
  margin : 'auto'
};

const style1 = {
  margin: 12,
};

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

const styles = {
  button: {
    margin: 12,
  },
  ImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};
