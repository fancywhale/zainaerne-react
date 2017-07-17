import * as React from 'react';

const style = require('./style.css');

export class MailContainer extends React.Component<any, any> {
  public render() {
    return (
      <div className={style.MailContainer}>
        {this.props.children}
      </div>
    )
  }
}
