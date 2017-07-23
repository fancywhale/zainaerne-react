import * as React from 'react';
const style = require('./style.css');

interface IProps {
  src?: string;
}

export class Avatar extends React.Component<IProps>{
  public render() {
    return (
      <span className={style.Avatar}>
        <img src={this.props.src} />
      </span>
    );
  }
}
