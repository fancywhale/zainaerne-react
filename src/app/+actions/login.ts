import { IAction } from '+actions/IAction.interface';
import * as url from 'url'; 
import { getCookieFromRequest, getCookie } from 'helpers/utils';
import { ApiClient } from 'redux/helpers/client';

export const LoginAction: IAction = {
  handler: (client) => async (nextState, replaceState, callback) => {
    console.log(nextState);

    try {
      const { userID, token } = nextState.location.query;
      const user = await client.get(`/users/${userID}`, {
        headers: {
          authorization: token
        }
      });
      client.res.cookie('token', token, { maxAge: 900000, httpOnly: false });
      client.res.cookie('user', JSON.stringify(user), { maxAge: 900000, httpOnly: false });

      const from = nextState.params['from'];
      if (from) {
        replaceState(from);
      } else {
        replaceState('/');
      }
      
    } catch (e) {
      const path = url.format({
        query: {
          message: e.message
        },
        pathname: '/error'
      });
      replaceState(path);
      console.log(e);
    }
    callback();
  }
};

export function checkLoging(client: ApiClient) {
  return async (nextState, replaceState) => {
    console.log(nextState);
    const token = process.env.BROWSER ? getCookie('cookie') : getCookieFromRequest(client.req, 'cookie');
    if (!token) {
      replaceState('/');
    }
  }
}
