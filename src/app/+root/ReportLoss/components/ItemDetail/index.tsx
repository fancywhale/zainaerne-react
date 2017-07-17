import * as React from 'react';
import {ColorItemContainer, ColorItem} from 'ColorItem';

const style = require('./style.css');
const reportLossStyle = require('../../style.css');

export class ItemDetail extends React.Component<any, any> {
  public render() {
    return (
      <div className={style.ItemDetail}>
        <div className={reportLossStyle.title}>
          <h1>物品详情描述</h1>
        </div>
        <div>
          <h6 className="row-title">颜色</h6>
          <ColorItemContainer>
            <ColorItem color="#d9534f" title="红色" />
            <ColorItem color="#2ca1f4" title="蓝色" />
            <ColorItem color="yellow" title="黄色" />
          </ColorItemContainer>
        </div>
        <hr />
        <h6 className="row-title">内部是否有证件</h6>
        <div>
          <span className="dropdown app-form-control">
            <button className="clear">身份证<span className="fa fa-caret-down"></span>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a>身份证</a>
              </li>
              <li>
                <a>护照</a>
              </li>
            </ul>
          </span>
          <input className="app-form-control" type="text" placeholder="姓名" />
          <input className="app-form-control lng" type="text" placeholder="证件号" />
        </div>
        <hr />
        <div className="text-center">
          <button className="btn btn-primary btn-lg">提交</button>
        </div>
      </div>
    );
  }
}