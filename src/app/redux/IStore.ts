import { ICounter } from 'models/counter';
import { IStars } from 'models/stars';
import { IApp } from 'models/app';

export interface IStore {
  counter: ICounter;
  stars: IStars;
  app: IApp;
};
