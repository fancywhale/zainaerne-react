import { ApiClient } from '../redux/helpers/client';
import { IStore } from 'redux/IStore';
import { EnterHook } from 'react-router';

export interface IAction {
  handler: (client: ApiClient, store: Redux.Store<IStore>) => EnterHook;
}
