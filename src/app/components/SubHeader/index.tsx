import * as React from 'react';

const style = require('./style.css');

interface IHeaderProps {
  activeSrc: string;
}

export class SubHeader extends React.Component < IHeaderProps, any > {
  public render() {
    return (
      <div className={[style.SubHeader].join(' ')}>
        <div className={[style.subHeaderContainer,  'container'].join(' ')}>
          <ul>
            <SubNav src="/console/mailbox" active={this.props.activeSrc === '/mailbox'} >收件箱</SubNav>
            <SubNav src="/console/control-panel" active={this.props.activeSrc === '/control-panel'} >控制面板</SubNav>
            <SubNav src="/console/user-info" active={this.props.activeSrc === '/user-info'} >用户信息</SubNav>
          </ul>
        </div>
      </div>
    );
  }
}

interface INavProps {
  src: string;
  active?: boolean;
}
export class SubNav extends React.Component<INavProps>{
  constructor(props) {
    super(props);
    this.state = { isActive: false };
  }

  public render() {
    return (
      <li>
        <a href={this.props.src || '#'} className={this.props.active ? style.active : ''}>
          {this.props.children}
        </a>
      </li>
    );
  }
}
