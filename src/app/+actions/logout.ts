import { IAction } from '+actions/IAction.interface';

export const LogoutAction: IAction = {
  handler: (client) => async (nextState, replaceState, callback) => {
    console.log(nextState);
    client.res.cookie('token', null, { maxAge: -1, httpOnly: false });
    client.res.cookie('user', null, { maxAge: -1, httpOnly: false });
    replaceState('/');
    callback();
  }
};
