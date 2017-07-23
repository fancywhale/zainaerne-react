import { AppUser } from 'models/AppUser';

export interface IAuth {
  loading?: boolean;
  loaded?: boolean;
  user?: AppUser;
  error?: any;
  loginError?: any;
  loggingIn?: boolean;
  token?: string;
  uuid?: number;
}