import * as React from 'react';

const style = require('./style.css');

interface IState {
  style: any;
  animating: boolean;
}

export class StepContainer extends React.Component<any, IState> {

  constructor(props) {
    super(props);
    this.state = { style: { display: 'none'}, animating: false };
  }

  public render() {
    const classNames = [style.StepContainer];
    this.state.animating && classNames.push(style.animating);
    return (
      <div className={classNames.join(' ')} style={this.state.style}>
        {this.props.children}
      </div>
    );
  }

  public hide() {
    this.setState({
      style: {
        opacity: 0
      },
    });
    setTimeout(() => {
      this.setState({
        animating: false,
        style: {
          display: 'none'
        }
      });
    }, 200);
  }

  public show() {
    this.setState({
      style: {
        display: 'block',
        opacity: 0
      },
    });
    setTimeout(() => {
      this.setState({
        animating: true,
        style: {
          opacity: 1
        }
      });
    }, 200);
  }
}
