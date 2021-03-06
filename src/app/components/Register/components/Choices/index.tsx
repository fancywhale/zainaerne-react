import * as React from 'react';

const style = require('./style.css');

export class Choices extends React.Component<any, any> {
  public render() {
    return (
      <div className={style.Choices}>
        <div>
          <a className={[style.wechatBackground, style.block, "btn icon-btn btn-lg block"].join(' ')}>
            <span className={style.iconContainer}>
              <i className="fa fa-wechat" />
            </span>
            <span className="text-container">使用微信账号注册</span>
          </a>
        </div>
      </div>
    );
  }
}
