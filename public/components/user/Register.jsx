import React, { Component } from 'react';
import { TextField, RaisedButton } from 'material-ui';


export default class Register extends Component {
  constructor(){
    super()

    this.state = {
      username: '',
      password1: '',
      password2: '',
      firstname: '',
      lastname: '',
      email: '',
      phone: ''
    }
    this._onInputChange = this._onInputChange.bind(this)
    this._submit = this._submit.bind(this)
  }
  _onInputChange(e){
    let key = e.target.dataset.statekey;
    let value = e.target.value;

    this.setState({
      [key]: value
    });
  }
  _submit(e){
      e.preventDefault();
    console.log('this.state:', this.state)
  }
  render(){
    let { username, password1, password2, firstname, lastname, email, phone } = this.state

    return(
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
          className="editInput" floatingLabelFixed={false} id='firstname'
          required onChange={this._onInputChange} data-statekey="firstname"
           value={firstname}
          />
          <TextField
          hintText='Last Name' floatingLabelText="Last Name"
          className="editInput" floatingLabelFixed={false} id='lastname'
          required onChange={this._onInputChange} data-statekey="lastname"
           value={lastname}
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
