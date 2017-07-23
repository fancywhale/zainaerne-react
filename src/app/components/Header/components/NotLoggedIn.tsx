import * as React from 'react';
import { Link } from 'react-router';
const { connect } = require('react-redux');
import { openLoginModal, openRegisterModal } from 'redux/modules/app/index';

interface IProps {
  openLoginModal?: any;
  openRegisterModal?: any;
}

@connect(
  () => { },
  (dispatch) => ({
    openLoginModal: () => dispatch(openLoginModal()),
    openRegisterModal: () => dispatch(openRegisterModal()),
  })
)
export class NotLoggedIn extends React.Component<IProps> {
  public render() {
    return (
      <ul className="list">
        <li className="item">
          <Link to="/"><span>首页</span></Link>
        </li>
        <li className="item">
          <a data-target="#mobileModal"><span>移动端</span></a>
        </li>
        <li className="item">
          <a><span>帮助</span></a>
        </li>
        <li className="item">
          <a><span>关于我们</span></a>
        </li>
        <li className="item">
          <a onClick={openRegisterModal}><span>注册</span></a>
        </li>
        <li className="item">
          <a onClick={openLoginModal}><span>登录</span></a>
        </li>
      </ul>
    );
  }
}
