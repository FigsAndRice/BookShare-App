/* eslint-disable import/extensions */
import React from 'react';

import { render } from 'react-dom';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Provider } from 'react-redux';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { lightBlue900, yellow50, yellow600 } from 'material-ui/styles/colors';

import injectTapEventPlugin from 'react-tap-event-plugin';

import { MuiThemeProvider } from 'material-ui';

import App from './components/App.jsx';

import Main from './components/Main.jsx';

import NotFound from './components/NotFound.jsx';

import Book from './components/booksearch/Book.jsx';

import Results from './components/booksearch/Results.jsx';

import EditBook from './components/library/EditBook.jsx';

import EditProfile from './components/user/EditProfile.jsx';

import Register from './components/user/Register.jsx';

import Login from './components/user/Login.jsx';

import Cart from './components/user/Cart.jsx';

import './style.css';

import store from './store';

injectTapEventPlugin();

const COOKIE_LOGIN = 'connect.sid';

const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
};

const checkLogin = () => {
  if (!getCookie(COOKIE_LOGIN)) {
    browserHistory.push('/');
  }
};

const muiTheme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: lightBlue900,
    accentColor: yellow50
  },
  snackbar: {
    textColor: yellow600,
    backgroundColor: lightBlue900
  },
  appBar: {
    textColor: yellow600
  }
});

render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router history={browserHistory}>
        <Route path="/" component={App} >
          <IndexRoute component={Main} />
          <Route path="/edit/:id" component={EditBook} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/results/:query" component={Results} />
          <Route path="/book/:isbn" component={Book} />
          <Route path="/cart" component={Cart} onEnter={checkLogin(COOKIE_LOGIN)} />
          <Route path="/editProfile" component={EditProfile} onEnter={checkLogin(COOKIE_LOGIN)} />
        </Route>
        <Route path="*" component={NotFound} />
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
