import * as React from 'react';
const style = require('./style.css');

export const ItemPanel = () => (
  <div className={style.ItemPanel}>
    <div className={style.getItemCmp}>
      <p className={style.foundTip}>
        <span className="fa fa-info-circle fa-lg" color="primary" />
        &nbsp;如果您觉得有可能是您的物品，可点击下方按钮认领。</p>
      <button className="btn btn-danger btn-lg btn-block">立刻认领</button>
      <hr />
      <div className="row">
        <div className="col-xs-8">
          <p className={style.foundInfo}>您在此处填写的信息仅用于平台匹配丢失物品，不会直接透露给本平台以外的个人。</p>
        </div>
        <div className="col-xs-4 icon-holder">
          <span className="fa fa-warning fa-3x" color="accent" />
        </div>
      </div>
    </div>
  </div>
);
    