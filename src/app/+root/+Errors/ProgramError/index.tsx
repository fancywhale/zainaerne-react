import * as React from 'react';
import { IStore } from 'redux/IStore';
import { RouterState } from 'react-router-redux';
const { connect } = require('react-redux');

interface IProps {
  routing: RouterState;
}

@connect(
  (state: IStore) => ({ routing: state.routing }),
)
export class ProgramError extends React.Component<IProps> {
  public render() {
    const { routing } = this.props;
    return (
      <div>
        对不起，服务器发生错误，请重试操作！
        {routing.locationBeforeTransitions.query['message']}
      </div>
    );
  }
}