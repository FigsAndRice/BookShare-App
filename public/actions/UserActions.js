import axios from 'axios';
import RouteActions from './RouteActions';

export function getUser() {
  return {
    // add logic to get profile of logged in user
  }
}

export function getUsers() {
  return {
    // add logic to get all users from database
  }
}

export function register(newUser) {
  axios.post('/api/users/register', newUser)
    .then(() => {
      RouteActions.route('/login')
    })
    .catch(console.error)
}

export function login(user) {
  return dispatch => {
    axios.post('/api/users/login', user)
      .then(() => {
        dispatch(getProfile())
        RouteActions.route('/profile')
      })
      .catch(console.error)
  }
}

export function logout() {
  return dispatch => {
    axios.post('/api/users/logout')
      .then(() => {
        RouteActions.route('/')
      })
      .catch(console.error)
  }
}
