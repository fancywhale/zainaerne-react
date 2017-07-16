import * as React from 'react';
import { DateRange } from 'react-date-range';
import { DropdownToggle } from 'Dropdown';
import { Dropdown } from 'react-bootstrap';

const style = require('./style.css');
const reportLossStyle = require('../../style.css');

interface IProps {
  onDateSelected: (startDate, endDate) => any;
}

export class LossDate extends React.Component<IProps, any> {

  private _handleClick() {
    if (!this.props.onDateSelected) return;
    this.props.onDateSelected(0, 1);
  }

  public render() {
    return (
      <div className={style.LossDate}>
        <div className={style.dateSelector}>
          <div className={reportLossStyle.title}>
            <h1>选择丢失的时间范围</h1>
          </div>
          <div className={[style.lgForm, 'lg-form'].join(' ')}>
            <div className={[style.formItem, 'form-item', style.timeType, 'form-item'].join(' ')}>
              <div className="dropdown">
                <button
                  className="clear"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">确切时间<span className="fa fa-caret-down" />
                </button>
                <ul className="dropdown-menu" aria-labelledby="dLabel">
                  <li>
                    <a>确切时间</a>
                  </li>
                  <li>
                    <a>大概时间</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={[style.formItem, 'form-item', style.date].join(' ')}>
              <Dropdown id="dateDropdown" className={style.dateContainer}>
                <DropdownToggle bsRole="toggle">
                  <span className={style.dateRange}>
                    <div className={style.dateInner}>
                      <span id="startDate">开始时间</span>
                      <span className={style.iconHolder}>
                        <svg viewBox="0 0 1000 1000" data-reactid="37">
                          <path
                            d="M694.4 242.4l249.1 249.1c11 11 11 21 0 32L694.4 772.7c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210.1-210.1H67.1c-13 0-23-10-23-23s10-23 23-23h805.4L662.4 274.5c-21-21.1 11-53.1 32-32.1z"
                            data-reactid="38"></path>
                        </svg>
                      </span>
                      <span id="endDate">结束时间</span>
                    </div>
                  </span>
                </DropdownToggle>
                <Dropdown.Menu>
                  <DateRange lang="cn" theme={{
                    DaySelected: {
                      background: '#2ca1f4'
                    },
                    DayActive: {
                      background: '#2ca1f4',
                      boxShadow: 'none'
                    },
                    DayInRange: {
                      background: '#ebf4f8',
                      color: '#444',
                      opacity: 0.8,
                    },
                    DayHover: {
                      background: '#dce0e0',
                    }
                  }} />
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className={[style.formItem, 'form-item', style.submit, 'submit'].join(' ')}>
              <div>
                <button type="button" onClick={this._handleClick.bind(this)}>确认</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
