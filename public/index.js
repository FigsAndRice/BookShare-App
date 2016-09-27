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

//import store from './store';

//Please include the Provider
injectTapEventPlugin();
render(
  <MuiThemeProvider>

      <Router history={browserHistory}>
        <Route path="/" component={App} >
        	<IndexRoute component={Main} />
        	<Route path="/results" component={Results} />
        </Route>
        <Route path="*" component={NotFound} />
      </Router>

  </MuiThemeProvider>,
  document.getElementById('root')
);
