import * as React from 'react';

const style = require('./style.css');

export class QuickLink extends React.Component<any, any> {
  public render() {
    return (
      <div className={[style.QuickLink, 'panel panel-default'].join(' ')}>
        <div className="panel-heading">
          快速链接
        </div>
        <div className="panel-body">
          <ul>
            <li>
              <a href="#">招领中心</a>
            </li>
            <li>
              <a href="#">帮助中心</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
