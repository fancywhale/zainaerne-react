import * as React from 'react';

const style = require('./style.css');

interface IProps {
  changeMethod?: any;
}

export class Email extends React.Component<IProps, any> {
  public render() {
    return (
      <div className={style.Email}>
        <div className={style.header}>
          <h4>邮箱注册</h4>
          <div className="methods">
            <a href="#" id="mobileBtn" onClick={() => { this.props.changeMethod(true);}}>
              <span>改用手机</span>
            </a>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="form-group">
              <input className={["form-control", style.decorativeInput].join(' ')} placeholder="邮箱地址" type="email" />
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
          <button className={["block btn btn-large btn-success", style.block].join(' ')} type="button">注册</button>
        </div>
      </div>
    );
  }
}
