import React, { Component } from 'react';

class Register extends Component {
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

  }
  _submit(e){
      e.preventDefault();
    console.log('this.state:', this.state)
  }
  render(){
    let { username, password1, password2, firstname, lastname, email, phone }
    return(
      <div>
        <form onSubmit={this._submit}>
          <TextField
          hintText='Username' floatingLabelText="Username"
          className="editInput" floatingLabelFixed={true} id='username'
          required onChange={this._onInputChange} data-statekey="username"
          underlineFocusStyle={style} value={username}
          />
          <TextField
          hintText='Password' floatingLabelText="Password" type='password'
          className="editInput" floatingLabelFixed={true} id='password1'
          required onChange={this._onInputChange} data-statekey="password1"
          underlineFocusStyle={style} value={password1}
          />
          <TextField
          hintText='Password' floatingLabelText="Password (again)" type='password'
          className="editInput" floatingLabelFixed={true} id='password2'
          required onChange={this._onInputChange} data-statekey="password2"
          underlineFocusStyle={style} value={password2}
          />
          <TextField
          hintText='email' floatingLabelText="email (again)" type='email'
          className="editInput" floatingLabelFixed={true} id='email'
          required onChange={this._onInputChange} data-statekey="email"
          underlineFocusStyle={style} value={email}
          />
          <TextField
          hintText='Password' floatingLabelText="Password (again)" type='password'
          className="editInput" floatingLabelFixed={true} id='password2'
          required onChange={this._onInputChange} data-statekey="password2"
          underlineFocusStyle={style} value={password2}
          />
          <div className="col-xs-12 text-center">
            <RaisedButton
            label="Submit"
            labelPosition="before"
            type='submit'
            className='editBtn'/>
          </div>
      </form>
    </div>
    )
  }
}
