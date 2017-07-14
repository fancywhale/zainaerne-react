import * as React from 'react';
const { connect } = require('react-redux');

import { Choices } from './components/Choices';
import { Footer } from './components/Footer';
import { Mobile } from './components/Mobile';
import { Email } from './components/Email';
import { Modal } from 'react-bootstrap';
import { closeRegisterModal } from 'redux/modules/app';
import { IStore } from 'redux/IStore';

interface IProps {
  registerOpen?: boolean;
  closeRegisterModal?: any;
}

interface IState {
  regMethodMobile?: boolean;
}

const style = require('./style.css');

@connect(
  (state: IStore) => ({ registerOpen: state.app.registerOpen }),
  (dispatch) => ({
    closeRegisterModal: () => dispatch(closeRegisterModal()),
  })
)
export class Register extends React.Component<IProps, IState> {

  constructor(props) {
    super(props);
    this.state = {regMethodMobile: true};
  }

  private _changeMethod(isMobile: boolean) {
    this.setState({ regMethodMobile: isMobile });
  }

  public render() {
    const methodCmp = this.state.regMethodMobile ?
      <Mobile changeMethod={this._changeMethod.bind(this)} /> : <Email changeMethod={this._changeMethod.bind(this)} />;
    const { registerOpen, closeRegisterModal } = this.props;
    return (
      <Modal show={registerOpen} onHide={closeRegisterModal} backdrop={true} bsSize="sm">
        <Modal.Body>
          <div className={style.Register}>
            <Choices />

            <div>
              <div className={style.orSperator}>
                <span>或</span>
              </div>
              <hr />
            </div>

            <div>
              {methodCmp}
            </div>
            <hr />

            <Footer />

          </div>
        </Modal.Body>
      </Modal>
    );
  }
}
