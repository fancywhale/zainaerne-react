import { ILossItem } from 'models/loss-item';
import { StoreAction } from 'models/StoreAction';

export const LOAD_ITEMS: string = 'items/LOAD_ITEMS';
export const LOAD_SUCCESS: string = 'items/LOAD_SUCCESS';

/** Initial State */
const initialState: ILossItem = {
  item: null,
  loading: false,
  error: null
};

/** Reducer */
export function lossItemReducer(state = initialState, action: StoreAction<ILossItem>) {
  switch (action.type) {
    case LOAD_ITEMS:
      return {
        ...state, loading: true
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        item: action.payload
      };
    default:
      return state;
  }
}

/** Action Creator */
export function loadItem() {
  return async (dispatch) => {
    dispatch(loadRequest());

    const item = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({ name: 'hehe' });
      }, 1);
    });
    dispatch({
      type: LOAD_SUCCESS,
      payload: item
    });
  }
}

function loadRequest(): StoreAction<ILossItem> {
  return {
    type: LOAD_ITEMS,
    payload: {
      loading: true
    }
  };
}