import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import { Provider } from 'react-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';
import { MuiThemeProvider } from 'material-ui';

import App from './components/App.jsx';
import Main from './components/Main.jsx';
import Results from './components/Results.jsx';
import NotFound from './components/NotFound.jsx';
import ShowBooks from './components/library/ShowBooks.jsx';
import Register from './components/user/Register.jsx';
import Login from './components/user/Login.jsx';
import Book from './components/Book.jsx';
import Cart from './components/Cart.jsx';
import EditProfile from './components/user/EditProfile.jsx';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {lightBlue900, yellow50, yellow600} from 'material-ui/styles/colors';

import './style.css'
import store from './store';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
	fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: lightBlue900,
    accentColor: yellow50
  },
  snackbar: {
      textColor: yellow600,
      backgroundColor: lightBlue900,
  },
  appBar: {
  	textColor: yellow600
  },

});

render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router history={browserHistory}>
        <Route path="/" component={App} >
          <IndexRoute component={Main} />
          <Route path="/results" component={Results} />
          <Route path="/showbooks" component={ShowBooks} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/book" component={Book} />
          <Route path="/cart" component={Cart} />
          <Route path='/editProfile' component={EditProfile}/>
        </Route>
        <Route path="*" component={NotFound} />
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
