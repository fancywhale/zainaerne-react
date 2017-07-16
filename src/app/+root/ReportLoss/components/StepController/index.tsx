import { IStepOptions } from './models/StepOption.interface';

import * as React from 'react';
import { StepNavBar } from './components/StepNavBar';
import { StepContainer } from './components/StepContainer';
import { IStepItem } from './models/StepItem.interface';

interface IState {
  index: number;
}

export interface IProps {
  options: IStepOptions;
  onChange: (item: IStepItem, index: number) => any;
}

export class StepController extends React.Component<IProps, IState> {

  private _container: StepContainer[];

  constructor(props) {
    super(props);
    this.state = { index: 0 };
  }
  
  private handleChange(index: number) {
    this.goIndex(index);
    console.log(index);
  }

  public componentDidMount() {
    setTimeout(() => {
      this.goIndex(0);
    }, 200);
    window.addEventListener('resize', this._adjustLayout.bind(this));
  }

  public componentWillUnmount() {
    window.removeEventListener("resize", this._adjustLayout.bind(this));
  }

  private _adjustLayout () {
    this.goIndex(0);
  }

  public render() {
    this._container = [];
    return (
      <div className="container">
        <div>
          <StepNavBar
            options={this.props.options}
            index={this.state.index}
            onChange={this.handleChange.bind(this)}
          />
        </div>
        <div>
          {
            this.props.options.steps.map((step, k) =>
              <StepContainer key={k} ref={(c) => this._container[k] = c}>
                {step.cmp}
              </StepContainer>
            )
          }
        </div>
      </div>
    );
  }

  public goIndex(index: number) {
    if (
      !this.props.options ||
      !this.props.options.steps ||
      index >= this.props.options.steps.length || index < 0
    ) return;

    this.setState({ index });
    if (this.props.onChange) {
      this.props.onChange(this.props.options.steps[this.state.index], this.state.index);
    }
    this._container[this.state.index].hide();
    this._container[index].show();
  }

  public goNext() {
    this.goIndex(this.state.index + 1);
  }

  public goPrevious() {
    this.goIndex(this.state.index - 1);
  }
}
