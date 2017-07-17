import * as React from 'react';

const style = require('./style.css');

export class Validation extends React.Component<any, any>{
  public render() {
    return (
      <div className={[style.Validation, 'panel', 'panel-default'].join(' ')}>
        <div className="panel-heading">
          已验证的信息
        </div>
        <div className="panel-body">
          <ul>
            <li>
              身份信息 <i className="fa fa-check text-success"/>
            </li>
            <li>手机号 <span>未验证</span></li>
            <li>微信 <span>未验证</span></li>
            <li>邮箱 <span>未验证</span></li>
          </ul>
        </div>
      </div>
    );
  }  
}
