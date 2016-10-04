/* eslint-disable import/extensions */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-children-prop */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-boolean-value */

import axios from 'axios';
import Dialog from 'material-ui/Dialog';
import RouteActions from './RouteActions';

export function receiveUser(user) {
  return {
    type: 'RECEIVE_USER',
    payload: { user }
  };
}

export function removeUser() {
  delete localStorage.user;
  return {
    type: 'REMOVE_USER',
    payload: {}
  };
}

export function updateUser(id, updateInfo) {
  return (dispatch) => {
    axios.put(`/api/users/${id}`, updateInfo)
        .then((res) => {
          localStorage.user = JSON.stringify(res.data);
          dispatch(receiveUser(res.data));
          RouteActions.route('/');
        })
        .catch();
  };
}

export function register(newUser) {
  return (dispatch) => {
    axios.post('/api/users/register', newUser)
    .then(() => {
      localStorage.user = JSON.stringify(newUser);
      dispatch(receiveUser(newUser));
      RouteActions.route('/');
    })
    .catch();
  };
}

export function login(user) {
  return (dispatch) => {
    axios.post('/api/users/login', user)
      .then((res) => {
        localStorage.user = JSON.stringify(res.data);
        dispatch(receiveUser(res.data));
        RouteActions.route('/');
      })
      .catch(Dialog('Password incorrect.'));
  };
}

export function logout() {
  return (dispatch) => {
    axios.post('/api/users/logout')
      .then(() => {
        dispatch(removeUser());
        RouteActions.route('/');
      })
      .catch();
  };
}

export function getUser(id) {
  return (dispatch) => {
    axios.get(`/api/users/${id}`)
      .then((res) => {
        localStorage.user = JSON.stringify(res.data);
        dispatch(receiveUser(res.data));
      })
      .catch();
  };
}

export function addToCart(userId, bookId) {
  return (dispatch) => {
    axios.put(`/api/users/${userId}/addToCart/${bookId}`)
      .then((res) => {
        localStorage.user = JSON.stringify(res.data);
        dispatch(receiveUser(res.data));
      })
      .catch();
  };
}

export function removeFromCart(userId, bookId) {
  return (dispatch) => {
    axios.put(`/api/users/${userId}/removeFromCart/${bookId}`)
      .then((res) => {
        localStorage.user = JSON.stringify(res.data);
        dispatch(receiveUser(res.data));
      })
      .catch();
  };
}

export function addFavorite(userId, bookId) {
  return (dispatch) => {
    axios.put(`/api/users/${userId}/addFavorite/${bookId}`)
      .then((res) => {
        localStorage.user = JSON.stringify(res.data);
        dispatch(receiveUser(res.data));
      })
      .catch();
  };
}

export function removeFavorite(userId, bookId) {
  return (dispatch) => {
    axios.put(`/api/users/${userId}/removeFavorite/${bookId}`)
      .then((res) => {
        localStorage.user = JSON.stringify(res.data);
        dispatch(receiveUser(res.data));
      })
      .catch();
  };
}
