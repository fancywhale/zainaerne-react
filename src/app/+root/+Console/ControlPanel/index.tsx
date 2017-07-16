import * as React from 'react';
import { SubHeader } from 'components/SubHeader/index';

const style = require('./style.css');

export class ControlPanel extends React.Component<any, any> {
  public render() {
    return (
      <div className={style.EditUser}>
        <SubHeader activeSrc="/control-panel" />
      </div>
    );
  }
}
