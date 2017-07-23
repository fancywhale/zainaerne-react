import { LoginAction } from '+actions/login';
import { IAction } from '+actions/IAction.interface';

interface IActionPath {
  path: string;
  action: IAction;
}

export const ACTIONS: IActionPath[] = [
  { path: 'loginAction', action: LoginAction },
];
