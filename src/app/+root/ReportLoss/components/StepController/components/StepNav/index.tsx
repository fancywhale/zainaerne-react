import * as React from 'react';
import { IStepItem } from '../../models/StepItem.interface';

interface IProps {
  item: IStepItem;
  active: boolean;
  enabled: boolean;
  onClick: any;
}

const style = require('./style.css');

export class StepNav extends React.Component<IProps, any>{

  public render() {
    const classNames = [style.StepNav];
    this.props.active && classNames.push(style.active);
    this.props.enabled && classNames.push(style.enabled);
    return (
      <div className={classNames.join(' ')} onClick={this.handleClick.bind(this)}>
        <span>{this.props.item.title}</span>
      </div>
    );
  }

  private handleClick() {
    if (!this.props.enabled || !this.props.onClick) return;
    this.props.onClick(this.props.item);
  }

}