import * as React from 'react';
const style = require('./style.css');

interface IProps {
  color?: string;
  title?: string;
}

export class ColorItem extends React.Component<IProps, any>{
  public render() {
    return (
      <label className={style.ColorItem}>
        <input type="checkbox" />
        <div className={style.itemInner}>
          <span className={style.palette} style={{ backgroundColor: this.props.color }}></span>
          <div>
            <span>{this.props.title}</span>
          </div>
        </div>
      </label>
    );
  }
}

export class ColorItemContainer extends React.Component {
  public render() {
    return (
      <div className={style.ColorItemContainer}>
        {this.props.children}
      </div>
    );
  }
}
