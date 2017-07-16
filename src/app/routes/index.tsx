import * as React from 'react';
import { IndexRoute, Route } from 'react-router';

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

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
    <Route path="item" component={Item} />
    <Route path="search" component={Search} />
    <Route path="report-loss" component={ReportLoss} />
    <Route path="console/">
      <IndexRoute component={EditUser} />
      <Route path="user-info" component={EditUser} />
      <Route path="mailbox" component={Mailbox} />
      <Route path="control-panel" component={ControlPanel} />
    </Route>  
  </Route>
);
