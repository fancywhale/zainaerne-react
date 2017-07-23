import { getCookieFromRequest } from '../../../helpers/utils';
import { AppUser } from '../../../models/AppUser';
import { IAuth } from 'models/auth';
import { ApiClient } from 'redux/helpers/client';
const LOAD = 'app/auth/LOAD';
const LOAD_SUCCESS = 'app/auth/LOAD_SUCCESS';
const LOAD_FAIL = 'app/auth/LOAD_FAIL';
const LOGIN = 'app/auth/LOGIN';
const LOGIN_SUCCESS = 'app/auth/LOGIN_SUCCESS';
const LOGIN_FAIL = 'app/auth/LOGIN_FAIL';
const LOGOUT = 'app/auth/LOGOUT';
const LOGOUT_SUCCESS = 'app/auth/LOGOUT_SUCCESS';
const LOGOUT_FAIL = 'app/auth/LOGOUT_FAIL';
const TOKEN_LOGIN = 'app/auth/TOKEN_LOGIN'
const GET_USER_INFO = 'app/auth/LOGIN_BY_TOKEN';
const REMOVE_USER_TOKEN = 'app/auth/REMOVE_USER_TOKEN';
import { getCookie } from 'helpers/utils';
import { StoreAction } from 'models/StoreAction';

const initialState: IAuth = {
  loading: false,
  loginError: null,
  user: null,
  loaded: false,
  error: null,
  loggingIn: false,
  uuid: null
};

export function authReducer(state: IAuth = initialState, action: StoreAction<IAuth>): IAuth {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        user: action.payload.user
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.payload.error
      };
    case LOGIN:
      return {
        ...state,
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        user: action.payload.user
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loggingIn: false,
        user: null,
        loginError: action.payload.error
      };
    case LOGOUT:
      return {
        ...state,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
        loggingIn: false,
      };
    case TOKEN_LOGIN:
      return {
        ...state,
      };
    case GET_USER_INFO:
      return {
        ...state,
        ...action.payload
      };
    case REMOVE_USER_TOKEN:
      return {
        ...state,
        user: null,
        token: null
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.auth && globalState.auth.loaded;
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get('/loadAuth')
  };
}

export function login(credential) {
  return {
    types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
    promise: (client: ApiClient) => client.post('/login', {
      data: credential
    })
  };
}

export function getUserInfo(client?: ApiClient): StoreAction<IAuth> {
  const user: AppUser = process.env.BROWSER ? getCookie('user')
    : getCookieFromRequest(client.req, 'user');
  const token = process.env.BROWSER ? getCookie('cookie')
    : getCookieFromRequest(client.req, 'cookie');
  
  if (user) {
    return {
      type: GET_USER_INFO,
      payload: {
        user,
        token,
        loggingIn: true,
        loginError: null,
      }
    };
  } else {
    return {
      type: REMOVE_USER_TOKEN,
    }
  }
}

export function logout() {
  return {
    types: [LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAIL],
    promise: (client) => client.get('/logout')
  };
}
