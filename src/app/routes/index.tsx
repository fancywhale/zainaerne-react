import { checkLoging } from '../+actions/login';
import { getUserInfo } from '../redux/modules/auth';
import * as React from 'react';
import { IndexRoute, Route } from 'react-router';
import { ACTIONS } from '+actions/index';
import { ApiClient } from 'redux/helpers/client';
import { ProgramError } from '+root/+Errors/ProgramError/index';
import { IStore } from 'redux/IStore';

import {
  App,
  Home,
  About,
  Item,
  Search,
  ReportLoss
} from '+root';

import {
  EditUser,
  Mailbox,
  ControlPanel
} from '+root/+Console';

export default (store: Redux.Store<IStore>, client: ApiClient) => (
  <Route path="/" component={App} onEnter={() => {
    store.dispatch(getUserInfo(client));
  }}>
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
    <Route path="item" component={Item} />
    <Route path="search" component={Search} />
    <Route path="report-loss" component={ReportLoss} />
    <Route path="error" component={ProgramError} />
    <Route path="console/" onEnter={checkLoging(client)}>
      <IndexRoute component={EditUser} />
      <Route path="user-info" component={EditUser} />
      <Route path="mailbox" component={Mailbox} />
      <Route path="control-panel" component={ControlPanel} />
    </Route>
    {
      /* actions  */
      ACTIONS.map((actionConf, key) => <Route
        path={actionConf.path}
        key={key}
        onEnter={actionConf.action.handler(client, store)}
      />)
    }
  </Route>
);
