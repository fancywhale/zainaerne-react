import * as React from 'react';
const { connect } = require('react-redux');

import { closeLoginModal } from 'modules/app';
import { IStore } from 'redux/IStore';
import { openRegisterModal } from 'redux/modules/app/index';

const style = require('./style.css');

@connect(
  (state: IStore) => ({ loginOpen: state.app.loginOpen, registerOpen: state.app.registerOpen }),
  (dispatch) => ({
    closeLoginModal: () => dispatch(closeLoginModal()),
    openRegisterModal: () => dispatch(openRegisterModal()),
  })
)
export class Footer extends React.Component<any, any> {
  public render() {
    const { openRegisterModal, closeLoginModal } = this.props;
    const goRegister = () => {
      openRegisterModal();
      closeLoginModal();
    };
    return (
      <div className={style.Footer}>
        <div className={[style.footer, "clearfix"].join(' ')}>
          <span>还没有账号吗？</span>
          <button className="login-btn btn outline btn-success pull-right" onClick={goRegister}>注册</button>
        </div>
      </div>
    );
  }
}
