import * as React from 'react';

const style = require('./style.css');

interface IProps {
  src: string;
  title: string;
  onClick?: () => any;
}

export class TypeOption extends React.Component<IProps, any>{
  private _handleClick() {
    if (!this.props.onClick) return;
    this.props.onClick();
  }

  public render() {
    return (
      <div className={style.TypeOption} onClick={this._handleClick.bind(this)}>
        <div className={style.imgHolder}>
          <a>
            <img
              src={this.props.src} />
          </a>
        </div>
        <label>{this.props.title}</label>
      </div>
    );
  }
}
