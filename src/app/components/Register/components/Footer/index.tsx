import * as React from 'react';
import { IStore } from 'redux/IStore';
import { openLoginModal, closeRegisterModal } from 'modules/app';

const { connect } = require('react-redux');
const style = require('./style.css');


@connect(
  (state: IStore) => ({ loginOpen: state.app.loginOpen, registerOpen: state.app.registerOpen }),
  (dispatch) => ({
    openLoginModal: () => dispatch(openLoginModal()),
    closeRegisterModal: () => dispatch(closeRegisterModal()),
  })
)
export class Footer extends React.Component<any, any> {

  public render() {
    const { openLoginModal, closeRegisterModal } = this.props;
    const goLogin = () => {
      openLoginModal();
      closeRegisterModal();
    };
    return (<div className={style.Footer}>
      <div className={[style.footer, "clearfix"].join(' ')}>
        <span>已有账号直接登录</span>
        <a className="login-btn btn outline btn-success pull-right" onClick={goLogin}>登录</a>
      </div>
    </div>
    );
  }
}
