import * as React from 'react';
import { SubHeader } from 'components/SubHeader';
import { SideNav } from './components/SideNav';
import { UserInfo } from './components/UserInfo';

const style = require('./style.css');

export class EditUser extends React.Component<any, any>{
  public render() {
    return (
      <div className={style.EditUser}>
        <SubHeader activeSrc="/user-info" />
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <SideNav/>
            </div>
            <div className="col-sm-8">
              <UserInfo/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}