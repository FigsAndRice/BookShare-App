/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-underscore-dangle */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField, RaisedButton } from 'material-ui';
import { login } from '../../actions/UserActions';
import RouteActions from '../../actions/RouteActions';

const styles = {
  button: {
    margin: '10px 10px 10px 10px'
  }
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.displayName = 'Login';

    this.state = {
      username: '',
      password: ''
    };

    this._onInputChange = this._onInputChange.bind(this);
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

  _submit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  _cancel(e) {
    e.preventDefault();
    this.setState({
      username: '',
      password: ''
    });
    RouteActions.route('/');
  }

  render() {
    return (
      <div className="text-center">
        <h1>Login</h1>
        <form onSubmit={this._submit}>
          <div className="col-xs-12 col-md-6 col-md-offset-3">
            <TextField
              hintText="Username" floatingLabelText="Username"
              className="editInput" floatingLabelFixed={false} id="username"
              required onChange={this._onInputChange} data-statekey="username"
            />
            <TextField
              hintText="Password" floatingLabelText="Password" type="password"
              className="editInput" floatingLabelFixed={false} id="password"
              required onChange={this._onInputChange} data-statekey="password"
            />
            <div className="col-xs-12 text-center">
              <RaisedButton
                style={styles.button}
                label="Submit"
                labelPosition="before"
                type="submit"
                className="editBtn"
              />
              <RaisedButton
                style={styles.button}
                label="Cancel"
                labelPosition="before"
                onClick={this._cancel}
                className="editBtn"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (state) => { dispatch(login(state)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
