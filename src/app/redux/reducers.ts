import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { counterReducer } from './modules/counter';
import { starsReducer } from './modules/stars';
import { IStore } from './IStore';
import { appReducer } from 'redux/modules/app/index';

const { reducer } = require('redux-connect');

const rootReducer: Redux.Reducer<IStore> = combineReducers<IStore>({
  routing: routerReducer,
  counter: counterReducer,
  stars: starsReducer,
  reduxAsyncConnect: reducer,
  app: appReducer,
});

export default rootReducer;
