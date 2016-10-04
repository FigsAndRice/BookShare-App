import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';

import logger from 'redux-logger';

import reducers from './reducers';

const middleware = applyMiddleware(thunk, logger());

const store = createStore(reducers, compose(
    middleware,
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

export default store;
