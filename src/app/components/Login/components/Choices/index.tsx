import { IStore } from '../../../../redux/IStore';
import * as React from 'react';
import * as url from 'url';
import { RouterState } from 'react-router-redux';
const { connect } = require('react-redux');

const style = require('./style.css');

interface IProps {
  routing: RouterState;
}

@connect(
  (state: IStore) => ({
    routing: state.routing
  })
)
export class Choices extends React.Component<IProps, any> {

  private getWXUrl() {
    const appID = 'wx012310856a3d916f';
    const redirectUri = encodeURIComponent('http://zainaerne.cn/oauth2/wx');
    const scope = 'snsapi_login';
    const wxUri = 'https://open.weixin.qq.com/connect/qrconnect';
    const currentUrl = this.props.routing.locationBeforeTransitions.pathname;
    
    return url.format({
      query: {
        location: wxUri,
        scope: scope,
        redirect_uri: redirectUri,
        appid: appID,
        hash: 'wechat_redirect',
        from: currentUrl,
      }
    });
  }

  public render() {
    return (
      <div className={style.Choices}>
        <div>
          <a href={this.getWXUrl()} className={[style.wechatBackground, style.block, "btn icon-btn btn-lg block"].join(' ')}>
            <span className={style.iconContainer}>
              <i className="fa fa-wechat" />
            </span>
            <span className="text-container">使用微信账号登录</span>
          </a>
        </div>
      </div>
    );
  }
}
