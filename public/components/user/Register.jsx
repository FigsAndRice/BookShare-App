import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField, RaisedButton } from 'material-ui';
import { register } from '../../actions/UserActions';

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

    this._onInputChange = this._onInputChange.bind(this)
    this._submit = this._submit.bind(this)
  }

  _onInputChange(e) {
    let key = e.target.dataset.statekey;
    let value = e.target.value;

    this.setState({
      [key]: value
    });
  }

  _submit(e) {
    e.preventDefault();
    let { username, password1, password2, firstName, lastName, email, phone} = this.state;
    if (password1 !== password2) {
      alert('Passwords do not match. Please enter passwords that match.')
    } else {
      const newUser = {
        username, password: password1, firstName, lastName, email, phone
      }
      this.props.register(newUser);
    }
  }

  render() {
    let { username, password1, password2, firstName, lastName, email, phone } = this.state

    return (
      <div>
        <form onSubmit={this._submit}>
          <TextField
          hintText='Username' floatingLabelText="Username"
          className="editInput" floatingLabelFixed={false} id='username'
          required onChange={this._onInputChange} data-statekey="username"
           value={username}
          />
          <TextField
          hintText='Password' floatingLabelText="Password" type='password'
          className="editInput" floatingLabelFixed={false} id='password1'
          required onChange={this._onInputChange} data-statekey="password1"
          value={password1}
          />
          <TextField
          hintText='Password' floatingLabelText="Password (again)" type='password'
          className="editInput" floatingLabelFixed={false} id='password2'
          required onChange={this._onInputChange} data-statekey="password2"
           value={password2}
          />
          <TextField
          hintText='Email' floatingLabelText="Email" type='email'
          className="editInput" floatingLabelFixed={false} id='email'
          required onChange={this._onInputChange} data-statekey="email"
           value={email}
          />
          <TextField
          hintText='First Name' floatingLabelText="First Name"
          className="editInput" floatingLabelFixed={false} id='firstName'
          required onChange={this._onInputChange} data-statekey="firstName"
           value={firstName}
          />
          <TextField
          hintText='Last Name' floatingLabelText="Last Name"
          className="editInput" floatingLabelFixed={false} id='lastName'
          required onChange={this._onInputChange} data-statekey="lastName"
           value={lastName}
          />
          <TextField
          hintText='Phone Number' floatingLabelText="Phone Number"
          className="editInput" floatingLabelFixed={false} id='phone'
          required onChange={this._onInputChange} data-statekey="phone"
           value={phone}
          />
          <div className="col-xs-12 text-center">
            <RaisedButton
            label="Submit"
            labelPosition="before"
            type='submit'
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    register: (state) => dispatch(register(state))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
