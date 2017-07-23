import { StoreAction } from '../../../models/StoreAction';
import { IApp } from 'models/app';


/** Action Types */
export const APP_MODE: string = 'app/APP_MODE';
export const WEB_MODE: string = 'app/WEB_MODE';
export const LOGIN_OPEN: string = 'app/LOGIN_OEPN';
export const LOGIN_CLOSE: string = 'app/LOGIN_CLOSE';
export const REGISTER_OPEN: string = 'app/REGISTER_OPEN';
export const REGISTER_CLOSE: string = 'app/REGISTER_CLOSE';
export const ON_ERROR: string = 'APP/ON_ERROR';

/** Initial State */
const initialState: IApp = {
  mode: 'WEB',
  loginOpen: false,
  registerOpen: false,
};

/** Reducer */
export function appReducer(state = initialState, action: StoreAction<IApp>) {
  switch (action.type) {
    case APP_MODE:
      return {
        ...state,
        mode: 'APP',
      };
    case WEB_MODE:
      return {
        ...state,
        mode: 'WEB',
      };

    case LOGIN_OPEN:
      return {
        ...state,
        loginOpen: true,
        
      };
    case LOGIN_CLOSE:
      return {
        ...state,
        loginOpen: false,
      };

    case REGISTER_OPEN:
      return {
        ...state,
        registerOpen: true,
        
      };
    case REGISTER_CLOSE:
      return {
        ...state,
        registerOpen: false,
      };
    default:
      return state;
  }
}

/** Action Creator */
export function toAppMode(): StoreAction<IApp> {
  return {
    type: APP_MODE,
  };
}

/** Action Creator */
export function toWebMode(): StoreAction<IApp> {
  return {
    type: WEB_MODE,
  };
}

export function openLoginModal(): StoreAction<IApp> {
  return {
    type: LOGIN_OPEN
  };
}

export function closeLoginModal(): StoreAction<IApp> {
  return {
    type: LOGIN_CLOSE
  };
}

export function openRegisterModal(): StoreAction<IApp> {
  return {
    type: REGISTER_OPEN
  };
}

export function closeRegisterModal(): StoreAction<IApp> {
  return {
    type: REGISTER_CLOSE
  };
}
