import * as React from 'react';
const style = require('./style.css');

export class HomeSubNav extends React.Component<any, any> {
  public render() {
    return (
      <div className={style.HomeSubNav}>
        <a href="report-loss">
          <h3>我要挂失物品</h3>
        </a>
        &nbsp;/&nbsp;
        <a href="report-loss">
          <h3>我要归还物品</h3>
        </a>
      </div>
    );
  }
}
