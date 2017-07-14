const { connect } = require('react-redux');
import { Choices } from 'components/Login/components/Choices/index';
import { LoginCmp } from 'components/Login/components/LoginCmp/index';
import { closeLoginModal } from 'modules/app';
import * as React from 'react';
import { Modal } from 'react-bootstrap';
import { IStore } from 'redux/IStore';
import { Footer } from './components/Footer';

const style = require('./style.css');

interface IProps {
  loginOpen?: boolean;
  closeLoginModal?: any;
}

@connect(
  (state: IStore) => ({ loginOpen: state.app.loginOpen }),
  (dispatch) => ({
    closeLoginModal: () => dispatch(closeLoginModal()),
  })
)
export class Login extends React.Component<IProps, any>{
  public render() {
    const { loginOpen, closeLoginModal } = this.props;
    return (
      <Modal show={loginOpen} onHide={closeLoginModal} backdrop={true} bsSize="sm">
        <Modal.Body>
          <div className={style.Login}>
            <Choices />
            <div>
              <div className={style.orSperator}>
                <span>或</span>
              </div>
              <hr />
            </div>
            <LoginCmp />
            <hr />
            <Footer />
          </div>  
        </Modal.Body>
      </Modal>
    );
  }
}
