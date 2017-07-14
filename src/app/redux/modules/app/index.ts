import { IAppAction, IApp } from 'models/app';


/** Action Types */
export const APP_MODE: string = 'app/APP_MODE';
export const WEB_MODE: string = 'app/WEB_MODE';
export const LOGIN_OPEN: string = 'app/LOGIN_OEPN';
export const LOGIN_CLOSE: string = 'app/LOGIN_CLOSE';
export const REGISTER_OPEN: string = 'app/REGISTER_OPEN';
export const REGISTER_CLOSE: string = 'app/REGISTER_CLOSE';

/** Initial State */
const initialState: IApp = {
  mode: 'WEB',
  loginOpen: false,
  registerOpen: false,
};

/** Reducer */
export function appReducer(state = initialState, action: IAppAction) {
  switch (action.type) {
    case APP_MODE:
      return Object.assign({}, state, {
        mode: 'APP',
      });

    case WEB_MODE:
      return Object.assign({}, state, {
        mode: 'WEB',
      });

    case LOGIN_OPEN:
      return Object.assign({}, state, {
        loginOpen: true,
      });  

    case LOGIN_CLOSE:
      return Object.assign({}, state, {
        loginOpen: false,
      });

    case REGISTER_OPEN:
      return Object.assign({}, state, {
        registerOpen: true,
      });
    
    case REGISTER_CLOSE:
      return Object.assign({}, state, {
        registerOpen: false,
      });
      
    default:
      return state;
  }
}

/** Action Creator */
export function toAppMode(): IAppAction {
  return {
    type: APP_MODE,
  };
}

/** Action Creator */
export function toWebMode(): IAppAction {
  return {
    type: WEB_MODE,
  };
}

export function openLoginModal(): IAppAction {
  return {
    type: LOGIN_OPEN
  };
}

export function closeLoginModal(): IAppAction {
  return {
    type: LOGIN_CLOSE
  };
}

export function openRegisterModal(): IAppAction {
  return {
    type: REGISTER_OPEN
  };
}

export function closeRegisterModal(): IAppAction {
  return {
    type: REGISTER_CLOSE
  };
}
