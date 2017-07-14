export type Mode = 'APP' | 'WEB';

export interface IApp {
  mode?: Mode;
  loginOpen?: boolean;
  registerOpen?: boolean;
}

export interface IAppAction {
  type: string;
  payload?: IApp;
}
