import * as React from 'react';
import { SubHeader } from 'components/SubHeader';

const style = require('./style.css');

export class Mailbox extends React.Component<any, any> {
  public render() {
    return (
      <div className={style.Mailbox}>
        <SubHeader activeSrc="/mailbox" />
      </div>
    );
  }
}
