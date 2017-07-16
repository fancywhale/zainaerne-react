import * as React from 'react';
import { Link } from 'react-router';
const { connect } = require('react-redux');

import { Logo } from 'components/Logo/index';
import { IApp } from 'models/app';
import { openLoginModal, openRegisterModal } from 'redux/modules/app/index';
const styles = require('./style.css');

interface IProps {
  app: IApp;
}

interface IState {
  isHover: boolean;
}

@connect(
  (state) => ({ app: state.app }),
  (dispatch) => ({
    openLoginModal: () => dispatch(openLoginModal()),
    openRegisterModal: () => dispatch(openRegisterModal()),
  })
)
export class Header extends React.Component<IProps, IState> {

  constructor(
    public props
  ) {
    super(props);
    this.state = {
      isHover: false
    };
  }

  private onScroll() {
    if (window.scrollY === 0) {
      this.setState({ isHover: false });
    } else {
      this.setState({ isHover: true });
    }
  }

  componentDidMount() {
    this.onScroll();
    window.addEventListener('scroll', this.onScroll.bind(this));
  }
  
  public render() {
    const mode = this.props.app.mode;
    const myClasses = mode === 'APP' ? [styles.app, styles.Header].join(' ') : styles.Header;
    const { openLoginModal, openRegisterModal } = this.props;
      
    return (
      <div className={myClasses}>
        <div className={this.state.isHover ? `${styles.header} ${styles.hover}` : styles.header}>
          <div className={styles.logo}>
            <a href="/">
              <Logo size={32} />
            </a>  
          </div>
          <div className={styles.center} />
          <div className={styles.menu}>
            <nav className="navigation-container">
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
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
