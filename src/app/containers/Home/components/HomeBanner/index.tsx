import * as React from 'react';

const style = require('./style.css');

export class HomeBanner extends React.Component<any, any> {
  public render() {
    return (
      <div className={style.Banner}>
        <h1><span>Zainarne在那儿呢</span><div className={style.sub}>你丢失的，就是我们关心的</div></h1>
      </div>
    );
  }
}
