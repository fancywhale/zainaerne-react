import * as React from 'react';
import { Link } from 'react-router';
const { connect } = require('react-redux');
import { openLoginModal, openRegisterModal } from 'redux/modules/app/index';
import { IAuth } from 'models/auth';
import { IStore } from 'redux/IStore';
import { Dropdown } from 'react-bootstrap';
import { DropdownToggle } from 'shared/components/Dropdown/index';
import { Avatar } from 'shared/components/Avatar/index';

interface IProps {
  openLoginModal: any;
  openRegisterModal: any;
  auth: IAuth;
}

@connect(
  (state: IStore) => ({ ...state }),
  (dispatch) => ({
    openLoginModal: () => dispatch(openLoginModal()),
    openRegisterModal: () => dispatch(openRegisterModal()),
  })
)
export class LoggingIn extends React.Component<IProps> {
  public render() {
    const { auth } = this.props;
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
          <Dropdown id="dateDropdown">
            <DropdownToggle bsRole="toggle">
              <Avatar src={auth.user.avatarUrl}/>
            </DropdownToggle>
            <Dropdown.Menu>
              <ul>
                <li>注销</li>
              </ul>
            </Dropdown.Menu>
          </Dropdown>
        </li>
      </ul>
    );
  }
}
