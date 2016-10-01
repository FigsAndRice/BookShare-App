import axios from 'axios';
import RouteActions from './RouteActions';

export function updateUser(id,updateInfo) {
  return dispatch => {
    axios.put(`/api/users/${id}`, updateInfo)
        .then(res => {
          localStorage.user = JSON.stringify(res.data);
          dispatch(receiveUser(res.data))
          RouteActions.route('/')
        })
        .catch(console.error)
  }
}

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
        localStorage.user = JSON.stringify(res.data);
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

export function getUser(id) {
  return dispatch => {
    axios.get(`/api/users/${id}`)
      .then(res => {
        localStorage.user = JSON.stringify(res.data);
        dispatch(receiveUser(res.data))
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
  delete localStorage.user;
  return {
    type: 'REMOVE_USER',
    payload: {}
  }
}

export function addToCart(userId, bookId) {
  return dispatch => {
    axios.put(`/api/users/${userId}/addToCart/${bookId}`)
      .then(res => {
        localStorage.user = JSON.stringify(res.data);
        dispatch(receiveUser(res.data))
      })
      .catch(console.error)
  }
}

export function removeFromCart(userId, bookId) {
  return dispatch => {
    axios.put(`/api/users/${userId}/removeFromCart/${bookId}`)
      .then(res => {
        localStorage.user = JSON.stringify(res.data);
        dispatch(receiveUser(res.data))
      })
      .catch(console.error)
  }
}

export function addFavorite(userId, bookId) {
  return dispatch => {
    axios.put(`/api/users/${userId}/addFavorite/${bookId}`)
      .then(res => {
        localStorage.user = JSON.stringify(res.data);
        dispatch(receiveUser(res.data))
      })
      .catch(console.error)
  }
}

export function removeFavorite(userId, bookId) {
  return dispatch => {
    axios.put(`/api/users/${userId}/removeFavorite/${bookId}`)
      .then(res => {
        console.log ('FROM USER ACTIONS', res.data);
        localStorage.user = JSON.stringify(res.data);
        dispatch(receiveUser(res.data))
      })
      .catch(console.error)
  }
}
