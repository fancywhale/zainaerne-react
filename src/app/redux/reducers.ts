import { authReducer } from './modules/auth';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { IStore } from './IStore';
import { appReducer } from 'redux/modules/app/index';
import { lossItemReducer } from 'redux/modules/loss-items/index';

const { reducer } = require('redux-connect');

const rootReducer: Redux.Reducer<IStore> = combineReducers<IStore>({
  routing: routerReducer,
  reduxAsyncConnect: reducer,
  app: appReducer,
  lossItem: lossItemReducer,
  auth: authReducer,
});

export default rootReducer;
