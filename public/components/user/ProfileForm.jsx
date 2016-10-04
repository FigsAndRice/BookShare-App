/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { TextField, RaisedButton } from 'material-ui';
import { yellow600, amber600 } from 'material-ui/styles/colors';

import { uploadImg, clearImgstore } from '../../actions/ImageActions';
import { updateUser, receiveUser } from '../../actions/UserActions';

import ProfilePicUploader from './ProfilePicUploader.jsx';

const editform = {
  margin: 'auto'
};

const style1 = {
  margin: 12
};

class ProfileForm extends Component {
  constructor(props) {
    super(props);

    const { username, firstName, lastName, email, phone } = this.props.user;

    this.state = {
      username,
      firstName,
      lastName,
      email,
      phone
    };
    this._onInputChange = this._onInputChange.bind(this);
    this._updateProfile = this._updateProfile.bind(this);
  }
  componentDidMount() {
    const user = JSON.parse(localStorage.user);
    this.props.receiveUser(user);
    const { username, firstName, lastName, email, phone } = user;
    this.setState({
      username, firstName, lastName, email, phone
    });
  }

  _onInputChange(e) {
    const key = e.target.dataset.statekey;
    const value = e.target.value;
    this.setState({
      [key]: value
    });
  }

  _updateProfile(imgUrl) {
    const { _id } = this.props.user;
    const updateObj = this.state;
    if (imgUrl) {
      updateObj.picture = imgUrl;
    }
    this.props.updateUser(_id, updateObj);
  }
  render() {
    const { username, firstName, lastName, email, phone } = this.state;
    let imgl = this.props.user.picture;
    const imgUrl = this.props.image.url;

    if (imgl === undefined) {
      imgl = 'http://www.biglunchextras.com/sites/default/files/user-default.png';
    }

    return (
      <div className="container text-center">
        <div className="col-md-6">
          <ProfilePicUploader imgUrl={imgl} />
        </div>
        <div className="col-md-6">
          <form style={editform}>
            <div>
              <TextField
                id="text-field-default"
                onChange={this._onInputChange}
                data-statekey="username"
                value={username}
                floatingLabelText="User Name"
              /><br />
              <TextField
                id="text-field-default"
                onChange={this._onInputChange}
                data-statekey="firstName"
                value={firstName}
                floatingLabelText="First Name"
              /><br />
              <TextField
                id="text-field-default"
                onChange={this._onInputChange}
                data-statekey="lastName"
                value={lastName}
                floatingLabelText="Last Name"
              /><br />
              <TextField
                id="text-field-default"
                onChange={this._onInputChange}
                data-statekey="email"
                value={email}
                floatingLabelText="Email"
              /><br />
              <TextField
                id="text-field-default"
                onChange={this._onInputChange}
                data-statekey="phone"
                value={phone}
                floatingLabelText="Phone"
              />
            </div>
            <RaisedButton backgroundColor={amber600} label="Update" style={style1} onClick={this._updateProfile.bind(null, imgUrl)} />
            <Link to="/"><RaisedButton backgroundColor={yellow600} label="cancel" style={style1} /></Link>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    image: state.image
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (id, state) => { dispatch(updateUser(id, state)); },
    uploadImg: (imgfile) => { dispatch(uploadImg(imgfile)); },
    clearImgstore: () => { dispatch(clearImgstore()); },
    receiveUser: (user) => { dispatch(receiveUser(user)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);
