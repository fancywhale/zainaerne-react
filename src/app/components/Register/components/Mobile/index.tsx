import * as React from 'react';

const style = require('./style.css');

interface IProps {
  changeMethod?: any;
}

export class Mobile extends React.Component<IProps, any> {
  public render() {
    return (
      <div className={style.Mobile}>
        <div className={style.header}>
          <h4>手机注册</h4>
          <div className="methods">
            <a href="#" onClick={() => { this.props.changeMethod(false);}}>
              <span>改用邮箱</span>
            </a>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon">+86</span>
                <input className={["form-control", style.decorativeInput].join(' ')} placeholder="手机号码" type="tel" />
                <span className="input-group-btn">
                  <button className={["btn btn-success", style.getCode].join(' ')}>获取验证码</button>
                </span>
              </div>
            </div>
            <div className="form-group">
              <input className={["form-control", style.decorativeInput].join(' ')} placeholder="名字" type="text" /></div>
            <div className="form-group">
              <input className={["form-control", style.decorativeInput].join(' ')} placeholder="姓氏" type="text" /></div>
            <div className="form-group">
              <input className={["form-control", style.decorativeInput].join(' ')} placeholder="密码" type="password" /></div>
          </div>
        </div>
        <div className={["form-group", style.terms].join(' ')}>
          <small>点击“注册”即表示我已同意在那儿呢的<a href="#">服务条款</a>及<a href="#">支付条款</a>。</small>
        </div>
        <div>
          <button className={["block btn btn-lg btn-success", style.block].join(' ')} type="button">注册</button>
        </div>
      </div>
    );
  }
}
