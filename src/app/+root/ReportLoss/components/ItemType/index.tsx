import * as React from 'react';
import { TypeOption } from './components/TypeOption';

const reportLossStyle = require('../../style.css');
const myStyle = require('./style.css');

interface IProps {
  onTypeSelected: (typeID: number) => any;
}

export class ItemType extends React.Component<IProps, any> {

  private _handleClick(itemID) {
    if (!this.props.onTypeSelected) return;
    this.props.onTypeSelected(itemID);
  }

  public render() {
    return (
      <div className={myStyle.ItemType}>
        <div className={reportLossStyle.title}>
          <h1>选择您丢失的物品种类</h1>
        </div>
        <div className={myStyle.navHolder}>
          <div className="btn-group" role="group">
            <button className="btn btn-default">证件</button>
            <button className="btn btn-default">物品</button>
          </div>
        </div>
        <div className="container-fluid">
          <div className={[myStyle.typeHolder, "row"].join(' ')}>
            <div className="col-xs-4">
              <TypeOption
                src="http://img2.imgtn.bdimg.com/it/u=3785186109,1332293261&fm=214&gp=0.jpg"
                title="身份证"
                onClick={() => { this._handleClick(0); }}
              />
            </div>
            <div className="col-xs-4">
              <TypeOption
                src="http://img2.imgtn.bdimg.com/it/u=3785186109,1332293261&fm=214&gp=0.jpg"
                title="护照"
                onClick={() => { this._handleClick(0); }}
              />
            </div>
            <div className="col-xs-4">
              <TypeOption
                src="http://img2.imgtn.bdimg.com/it/u=3785186109,1332293261&fm=214&gp=0.jpg"
                title="户口本"
                onClick={() => { this._handleClick(0); }}
              />
            </div>
            <div className="col-xs-4">
              <TypeOption
                src="http://img2.imgtn.bdimg.com/it/u=3785186109,1332293261&fm=214&gp=0.jpg"
                title="身份证"
                onClick={() => { this._handleClick(0); }}
              />
            </div>
            <div className="col-xs-4">
              <TypeOption
                src="http://img2.imgtn.bdimg.com/it/u=3785186109,1332293261&fm=214&gp=0.jpg"
                title="身份证"
                onClick={() => { this._handleClick(0); }}
              />
            </div>
            <div className="col-xs-4">
              <TypeOption
                src="http://img2.imgtn.bdimg.com/it/u=3785186109,1332293261&fm=214&gp=0.jpg"
                title="身份证"
                onClick={() => { this._handleClick(0); }}
              />
            </div>
          </div>
        </div>
      </div>);
  }
}