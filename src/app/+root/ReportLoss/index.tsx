import { IStepOptions } from './components/StepController/models/StepOption.interface';

import * as React from 'react';
import { StepController } from './components/StepController/index';
import { ItemType } from './components/ItemType/index';
import { LossDate } from './components/LossDate/index';
import { LossLocation } from './components/LossLocation/index';
import { ItemDetail } from './components/ItemDetail/index';

const style = require('./style.css');

export class ReportLoss extends React.Component<any, any> {

  private _stepCtrl: StepController;

  private options: IStepOptions = {
    steps: [{
      cmp: <ItemType onTypeSelected={() => { this._stepCtrl.goNext() }} />,
      title: '物品种类'
    }, {
      cmp: <LossDate onDateSelected={() => { this._stepCtrl.goNext() }} />,
      title: '丢失时间'
    }, {
      cmp: <LossLocation onLocationSelected={() => { this._stepCtrl.goNext() }} />,
      title: '丢失地点'
    }, {
      cmp: <ItemDetail/>,
      title: '物品详情'
    }]
  };

  private _handleChange(opt, index) {
    console.log(opt, index);
  }

  public render() {
    return (
      <div className={style.ReportLoss}>
        <StepController options={this.options} onChange={this._handleChange.bind(this)} ref={(c) => this._stepCtrl = c} />
      </div>
    );
  }
}
