import React, { Component } from 'react';
import { TextField, RaisedButton } from 'material-ui'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.displayName = 'Login';

    this.state = {
      username: '',
      password: ''
    }

    this._onInputChange = this._onInputChange.bind(this);
    this._submit = this._submit.bind(this);

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
    //this.props.login(this.state);
    console.log('this.state:', this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit={this._submit}>
          <div className='col-xs-12 col-md-6 col-md-offset-3'>
            <TextField
            hintText='Username' floatingLabelText="Username"
            className="editInput" floatingLabelFixed={false} id='username'
            required onChange={this._onInputChange} data-statekey="username"
            />
            <TextField
            hintText='Password' floatingLabelText="Password" type='password'
            className="editInput" floatingLabelFixed={false} id='password'
            required onChange={this._onInputChange} data-statekey="password"
            />
            <div className="col-xs-12 text-center">
              <RaisedButton
              label="Submit"
              labelPosition="before"
              type='submit'
              className='editBtn'/>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
