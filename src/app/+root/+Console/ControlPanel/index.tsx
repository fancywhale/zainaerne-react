import * as React from 'react';
import { SubHeader } from 'components/SubHeader';
import { UserInfo } from './components/UserInfo';
import { Validation } from './components/Validation';
import { QuickLink } from './components/QuickLink';
import { Message } from './components/Message';
import { Notification } from './components/Notification';

const style = require('./style.css');

export class ControlPanel extends React.Component<any, any> {
  public render() {
    return (
      <div className={style.ControlPanel}>
        <SubHeader activeSrc="/control-panel" />
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <UserInfo />
              <Validation />
              <QuickLink />
            </div>
            <div className="col-md-9">
              <Notification />
              <Message />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
