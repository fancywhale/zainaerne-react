import { IStore } from '../../../../redux/IStore';
import * as React from 'react';
import * as url from 'url';
import { RouterState } from 'react-router-redux';
const { connect } = require('react-redux');

const style = require('./style.css');

interface IProps {
  routing?: RouterState;
}

@connect(
  (state: IStore) => ({
    routing: state.routing
  })
)
export class Choices extends React.Component<IProps, any> {

  private getWXUrl() {
    const appID = 'wx012310856a3d916f';
    const scope = 'snsapi_login';
    const wxUri = '//open.weixin.qq.com';
    const currentUrl = this.props.routing.locationBeforeTransitions.pathname;
    const redirectUri = url.format({
      protocol: 'http',
      host: 'zainaerne.cn',
      query: { from: currentUrl },
      pathname: '/oauth2/wx'
    });
    
    return url.format({
      protocol: 'https',
      host: wxUri,
      pathname: '/connect/qrconnect',
      query: {
        scope: scope,
        redirect_uri: redirectUri,
        appid: appID,
        hash: 'wechat_redirect',
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
