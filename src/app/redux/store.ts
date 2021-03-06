import {clientMiddleware} from './middlewares/client-middleware';
import AppConfig from '../../../config/main.js';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { IStore } from './IStore';
const createLogger = require('redux-logger');

export function configureStore(history, initialState?: IStore, client?): Redux.Store<IStore> {

  const middlewares: Redux.Middleware[] = [
    clientMiddleware(client),
    routerMiddleware(history),
    thunk,
  ];

  /** Add Only Dev. Middlewares */
  if (AppConfig.env !== 'production' && process.env.BROWSER) {
    const logger = createLogger();
    middlewares.push(logger);
  }

  const composeEnhancers = (AppConfig.env !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(...middlewares),
  ));

  if (AppConfig.env === 'development' && (module as any).hot) {
    (module as any).hot.accept('./reducers', () => {
      store.replaceReducer((require('./reducers')));
    });
  }

  return store as any;
}
