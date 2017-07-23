import { LoginAction } from '+actions/login';
import { IAction } from '+actions/IAction.interface';
import { LogoutAction } from '+actions/logout';

interface IActionPath {
  path: string;
  action: IAction;
}

export const ACTIONS: IActionPath[] = [
  { path: 'loginAction', action: LoginAction },
  { path: 'logoutAction', action: LogoutAction },
];
