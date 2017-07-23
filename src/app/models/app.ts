export type Mode = 'APP' | 'WEB';

export interface IApp {
  mode?: Mode;
  loginOpen?: boolean;
  registerOpen?: boolean;
}