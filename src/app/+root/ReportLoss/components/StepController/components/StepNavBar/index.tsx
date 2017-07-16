import * as React from 'react';
import { IStepOptions } from '../../models/StepOption.interface';
import * as ReactDOM from 'react-dom';
import { StepNav } from '../StepNav';

const style = require('./style.css');

interface IProps {
  options: IStepOptions;
  index: number;
  onChange: (index: number) => any;
}

interface IState {
  indicatorStyle?: {
    width: string;
    left: string;
  };
}

export class StepNavBar extends React.Component<IProps, IState>{

  private _childNavs: StepNav[];

  constructor(props) {
    super(props);
    this.state = {
      indicatorStyle: { width: '0px', left: '0px' },
    };
  }

  private getIndicatorStyle() {
    const domNode = ReactDOM.findDOMNode(this._childNavs[this.props.index]);
    if (!domNode) { return this.state.indicatorStyle; }
    const activeNavRect = domNode.getBoundingClientRect();
    const myRect = ReactDOM.findDOMNode(this).getBoundingClientRect();
    const indicatorStyle = {
      width: `${activeNavRect.width - 30}px`,
      left: `${activeNavRect.left - myRect.left + 15}px`
    };
    return indicatorStyle;
  }

  public componentDidMount() {
    const indicatorStyle = this.getIndicatorStyle();
    if (this.state.indicatorStyle.left === indicatorStyle.left) return;
    this.setState({ indicatorStyle });
  }

  public componentDidUpdate() {
    const indicatorStyle = this.getIndicatorStyle();
    if (this.state.indicatorStyle.left === indicatorStyle.left) return;
    this.setState({ indicatorStyle });
  }

  private _go(index: number) {
    if (!this.props.onChange) return;
    this.props.onChange(index);
  }

  public render() {
    this._childNavs = [];
    const navs = this.props.options.steps.map(
      (step, index) => (
        <StepNav
          active={this.props.index === index}
          enabled={this.props.index > index}
          item={step}
          key={index}
          ref={(c) => this._childNavs[index] = c}
          onClick={() => this._go(index)}
        />)
    );
    
    return (
      <div className={style.StepNavBar}>
        {navs}
        <span className={style.navIndicator} style={this.state.indicatorStyle}></span>
      </div>
    );
  }
}
