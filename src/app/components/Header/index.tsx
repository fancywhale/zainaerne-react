import { IStore } from '../../redux/IStore';
import * as React from 'react';
const { connect } = require('react-redux');
const { asyncConnect } = require('redux-connect');

import { Logo } from 'components/Logo/index';
import { IApp } from 'models/app';
import { IAuth } from 'models/auth';
import { LoggingIn } from './components/LoggingIn';
import { NotLoggedIn } from './components/NotLoggedIn';
const styles = require('./style.css');

interface IProps {
  app: IApp;
  auth: IAuth;
  openLoginModal: any;
  openRegisterModal: any;
}

interface IState {
  isHover: boolean;
}

@asyncConnect([{
  promise: ({ store: { dispatch } }) => {
    dispatch();
    // return dispatch(getStars());
  },
}])
@connect(
  (state: IStore) => ({
    ...state
  }),
)
export class Header extends React.Component<IProps, IState> {

  constructor(
    public props: IProps
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
    const { auth } = this.props;
      
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
              
                {
                  auth.loggingIn ? <LoggingIn /> : <NotLoggedIn/>
                }
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
