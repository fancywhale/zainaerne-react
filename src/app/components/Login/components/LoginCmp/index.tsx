import * as React from 'react';

const style = require('./style.css');

export class LoginCmp extends React.Component<any, any> {
  public render() {
    return (
      <div className={style.LoginCmp}>
        <div className="container-fluid">
          <div className="row">
            <div className="form-group">
              <input
                className={['form-control', style.decorativeInput, 'lg'].join(' ')}
                placeholder="手机号码或邮箱"
                type="tel" />
            </div>
            <div className="form-group">
              <input
                className={['form-control', style.decorativeInput, 'lg'].join(' ')}
                placeholder="密码"
                type="password" />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label className={style.rememberMe}>
            <input
              type="checkbox"
              name="remember_me"
              id="remember_me2"
              value="true" />记住我</label>
        </div>
        <div>
          <button className={[style.block, 'btn btn-large btn-success block'].join(' ')} type="button">登录</button>
        </div>
      </div>
    );
  }
}
