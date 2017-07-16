import * as React from 'react';
import { DateRange } from 'react-date-range';
import { Dropdown } from 'react-bootstrap';
import { DropdownToggle } from 'shared/components/Dropdown/index';

const style = require('./style.css');

export class HomeSearchForm extends React.Component {


  public render() {
    
    return (
      <div className={style.HomeSearchForm}>
        <div className={[style.searchItem, style.location].join(' ')}>
          <label>地点</label>
        <div>
          <input type="text" placeholder="建筑物，街道，交通设施" className="clear" />
        </div>
        </div>
        <div className={[style.searchItem, style.date].join(' ')}>
          <label style={{ display: 'block' }}>时间</label>
          
          <Dropdown id="dateDropdown">
            <DropdownToggle bsRole="toggle">
              <span id="startDate">开始时间</span>
              <span className={style.iconHolder}>
                <span className="fa fa-long-arrow-right"/>
              </span>
              <span id="endDate">结束时间</span>
              <span className="fa fa-caret-down"></span>
            </DropdownToggle>
            <Dropdown.Menu>
              <div style={{width: '562px'}}>
                <DateRange lang="cn" theme={{
                  DaySelected    : {
                    background   : '#2ca1f4'
                  },
                  DayActive    : {
                    background   : '#2ca1f4',
                    boxShadow    : 'none'
                  },
                  DayInRange     : {
                    background   : '#ebf4f8',
                    color: '#444',
                    opacity: 0.8,
                  },
                  DayHover       : {
                    background   : '#dce0e0',
                  }
                  }} />
              </div>  
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className={[style.searchItem, style.itemType].join(' ')}>
          <label>物品种类</label>
          <div className="dropdown">
            <button>
              证件<span className="fa fa-caret-down"></span>
            </button>
            <ul className="dropdown-menu">
              <li><a>手机</a></li>
              <li><a>手提包/背包</a></li>
              <li><a>钱包</a></li>
            </ul>
          </div>
        </div>
        <div className={[style.searchItem, style.search].join(' ')}>
          <a href="/search"><button type="button"><span>搜索</span></button></a>
        </div>
      </div>
    );
  }
}
