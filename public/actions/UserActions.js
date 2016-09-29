import axios from 'axios';
import RouteActions from './RouteActions';

export function register(newUser) {
  return dispatch => {
    axios.post('/api/users/register', newUser)
    .then(() => {
      dispatch(receiveUser(newUser))
      RouteActions.route('/')
    })
    .catch(console.error)
  }
}

export function login(user) {
  return dispatch => {
    axios.post('/api/users/login', user)
      .then(res => {
        dispatch(receiveUser(res.data))
        RouteActions.route('/');
      })
      .catch(err => {
        alert('Password incorrect.');
        console.error(err);
      })
  }
}

export function logout() {
  return dispatch => {
    axios.post('/api/users/logout')
      .then(() => {
        dispatch(removeUser())
        RouteActions.route('/')
      })
      .catch(console.error)
  }
}

export function receiveUser(user) {
  return {
    type: 'RECEIVE_USER',
    payload: { user }
  }
}

export function removeUser() {
  return {
    type: 'REMOVE_USER',
    payload: {}
  }
}
