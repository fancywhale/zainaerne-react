import { IApp } from 'models/app';
import { ILossItem } from 'models/loss-item';
import { IAuth } from 'models/auth';
import { RouterState } from 'react-router-redux';

export interface IStore {
  app: IApp;
  lossItem: ILossItem;
  auth: IAuth;
  routing: RouterState;
};
