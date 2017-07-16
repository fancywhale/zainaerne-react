import * as React from 'react';

export class DropdownToggle extends React.Component<any, any> {
  constructor(props, context) {
    super(props, context);
  }

  private handleClick(e) {
    e.preventDefault();
    this.props.onClick(e);
  }

  public render() {
    return (
      <button className="clear" onClick={this.handleClick.bind(this)}>
        {this.props.children}
      </button>
    );
  }
}

export class DropdownMenu extends React.Component<any, any> {

  public focusNext() {
    
  }

  public render() {
    const { children } = this.props;

    return (
      <div className="dropdown-menu">
        {children}
      </div>
    );
  }
}
