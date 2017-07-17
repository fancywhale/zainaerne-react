import * as React from 'react';

const style = require('./style.css');

export class EmptyList extends React.Component<any, any> {
  public render() {
    return (
      <div className={style.EmptyList}>
        <div className={style.content}>
          <h1>您还没有消息</h1>
          <p className="sub">当您有消息时，我们会以短信形式通知您。</p>
        </div>  
      </div>
    );
  }
}
