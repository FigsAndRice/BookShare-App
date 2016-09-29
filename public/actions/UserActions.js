import axios from 'axios';
import RouteActions from './RouteActions';

export function updateUser(id,updateInfo) {
  return dispatch => {
    axios.put(`/api/users/${id}`,updateInfo)
        .then(res => {
          dispatch(receiveUser(res.data))
          RouteActions.route('/showbooks')
        })
        .catch(console.error)
  }
}

export function register(newUser) {
  return dispatch => {
    axios.post('/api/users/register', newUser)
    .then(() => {
      dispatch(receiveUser(newUser))
      RouteActions.route('/showbooks')
    })
    .catch(console.error)
  }
}

export function login(user) {
  return dispatch => {
    axios.post('/api/users/login', user)
      .then(res => {
        dispatch(receiveUser(res.data))
        RouteActions.route('/showbooks');
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

export function addToCart(userId, bookId) {
  return dispatch => {
    axios.put(`/api/users/${userId}/addToCart/${bookId}`)
      .then(res => {
        dispatch(receiveUser(res.data))
      })
      .catch(console.error)
  }
}

export function addFavorite(userId, bookId) {
  return dispatch => {
    axios.put(`/api/users/${userId}/addFavorite/${bookId}`)
      .then(res => {
        dispatch(receiveUser(res.data))
      })
      .catch(console.error)
  }
}
