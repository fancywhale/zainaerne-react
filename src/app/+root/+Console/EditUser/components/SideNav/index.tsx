import * as React from 'react';

const style = require('./style.css');

export class SideNav extends React.Component<any, any> {
  public render() {
    return (
      <div className={style.SideNav}>
        <ul>
          <li>
            <a className={style.active}>编辑个人资料</a>
          </li>
        </ul>
        <hr />
        <div>
          <button className="btn block btn-success">查看个人资料</button>
        </div>
      </div>
    );
  }
}
