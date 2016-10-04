/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField, RaisedButton } from 'material-ui';

import { register } from '../../actions/UserActions';
import RouteActions from '../../actions/RouteActions';

const styles = {
  button: {
    margin: '10px 10px 10px 10px'
  }
};

class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password1: '',
      password2: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    }

    this._onInputChange = this._onInputChange.bind(this);
    this._validatePassword = this._validatePassword.bind(this);
    this._validateEmail = this._validateEmail.bind(this);
    this._submit = this._submit.bind(this);
    this._cancel = this._cancel.bind(this);
  }

  _onInputChange(e) {
    const key = e.target.dataset.statekey;
    const value = e.target.value;

    this.setState({
      [key]: value
    });
  }

  _validatePassword(password) {
    const regEx = /^(?=.*[\d])(?=.*[A-Z])(?=.*["\-\\;:,.'<>!\[{(*)}\]_|`+~@#$%^&\=\?*])[\w"\-\\;:,.'<>!\[{(*)}\]_|`+~@#$%^&\=\?*]{8,16}$/;
    if (!regEx.test(password)) {
      alert("Password must contain 8-16 characters, 1 number, 1 uppercase letter, and 1 special character");
      return false;
    } else {
      return true;
    }
  }

  _validateEmail(email) {
    const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!regEx.test(email)) {
      alert("Invalid email. Please enter a correct email address.");
      return false;
    } else {
      return true;
    }
  }

  _submit(e) {
    e.preventDefault();
    const { username, password1, password2, firstName, lastName, email, phone} = this.state;
    if (password1 !== password2) {
      alert('Passwords do not match. Please enter passwords that match.')
    } else {
      if (this._validatePassword(password1) && this._validateEmail(email)) {
        const newUser = {
          username, password: password1, firstName, lastName, email, phone
        }
        this.props.register(newUser);
        RouteActions.route('/login');
      }
    }
  }

  _cancel(e) {
    e.preventDefault();
    this.setState({
      username: '',
      password1: '',
      password2: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    });
    RouteActions.route('/');
  }

  render() {
    const { username, password1, password2, firstName, lastName, email, phone } = this.state

    return (
      <div className="container text-center">
        <h1>Welcome To BookFinder</h1>
        <p>Please Enter the following details to Register</p>
        <form onSubmit={this._submit}>
          <TextField
            hintText="Username" floatingLabelText="Username"
            className="editInput" floatingLabelFixed={false} id="username"
            required onChange={this._onInputChange} data-statekey="username"
            value={username}
          /><br />
          <TextField
            hintText="Password" floatingLabelText="Password" type="password"
            className="editInput" floatingLabelFixed={false} id="password1"
            required onChange={this._onInputChange} data-statekey="password1"
            value={password1}
          /><br />
          <TextField
            hintText="Password" floatingLabelText="Password (again)" type="password"
            className="editInput" floatingLabelFixed={false} id="password2"
            required onChange={this._onInputChange} data-statekey="password2"
            value={password2}
          /><br />
          <TextField
            hintText="Email" floatingLabelText="Email" type="email"
            className="editInput" floatingLabelFixed={false} id="email"
            required onChange={this._onInputChange} data-statekey="email"
            value={email}
          /><br />
          <TextField
            hintText="First Name" floatingLabelText="First Name"
            className="editInput" floatingLabelFixed={false} id="firstName"
            required onChange={this._onInputChange} data-statekey="firstName"
            value={firstName}
          /><br />
          <TextField
            hintText="Last Name" floatingLabelText="Last Name"
            className="editInput" floatingLabelFixed={false} id="lastName"
            required onChange={this._onInputChange} data-statekey="lastName"
            value={lastName}
          /><br />
          <TextField
            hintText="Phone Number" floatingLabelText="Phone Number"
            className="editInput" floatingLabelFixed={false} id="phone"
            required onChange={this._onInputChange} data-statekey="phone"
             value={phone}
          /><br />
          <div className="col-xs-12 text-center">
            <RaisedButton
            style={styles.button}
            label="Submit"
            labelPosition="before"
            type='submit'
            />
            <RaisedButton
            style={styles.button}
            label="Cancel"
            labelPosition="before"
            onClick={this._cancel}
            />
          </div>
      </form>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (state) => dispatch(register(state))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
