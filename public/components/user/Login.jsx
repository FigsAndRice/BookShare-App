import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField, RaisedButton } from 'material-ui';
import { login } from '../../actions/UserActions';
import RouteActions from '../../actions/RouteActions';

class Login extends Component {
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
    this.props.login(this.state);
  }

  render() {
    return (
      <div className="text-center">
        <h1>Login</h1>
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

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (state) => {dispatch(login(state))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
