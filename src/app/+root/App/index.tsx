import AppConfig from '../../../../config/main.js';

import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Header } from 'components';
import { Login } from 'components/Login';
import { Register } from 'components/Register';

const style = require('./style.css');

class App extends React.Component<any, any> {
  public render() {
    return (
      <section className={style.AppContainer}>
        <Helmet {...AppConfig.app} {...AppConfig.app.head}/>
        <Header />
        {this.props.children}
        <Login />
        <Register />
      </section>
    );
  }
}

export { App }
