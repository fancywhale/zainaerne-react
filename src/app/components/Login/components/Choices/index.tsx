import * as React from 'react';

const style = require('./style.css');

export class Choices extends React.Component<any, any> {

  private getWXUrl() {
    const appID = 'wx012310856a3d916f';
    const redirectUri = encodeURIComponent('http://localhost:8080/console/control-panel');
    const scope = 'snsapi_login';
    const wxUri = 'https://open.weixin.qq.com/connect/qrconnect';
    return `${wxUri}?appid=${appID}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}&#wechat_redirect`;
  }

  public render() {
    return (
      <div className={style.Choices}>
        <div>
          <a href={this.getWXUrl()} className={[style.wechatBackground, style.block, "btn icon-btn btn-lg block"].join(' ')}>
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
