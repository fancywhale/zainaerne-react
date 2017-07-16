import * as React from 'react';

declare const BMap: any;

const style = require('./style.css');

interface IProps {
  onLocationSelected: () => any;
}

export class LossLocation extends React.Component<IProps, any>{
  private _handleClick() {
    if (!this.props.onLocationSelected) return;
    this.props.onLocationSelected();
  }

  public componentDidMount() {
    var map = new BMap.Map("myMap");    // 创建Map实例
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
    map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
    map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true); 
  }

  public render() {
    return (
      <div className={style.LossLocation}>
        <div className={[style.lgForm, "lg-form"].join(' ')}>
          <div className={["form-item", style.locationType, style.formItem].join(' ')}>
            <div className="dropdown">
              <button
                className="clear"
              >设施<span className="fa fa-caret-down" />
              </button>
              <ul className="dropdown-menu" aria-labelledby="dLabel">
                <li>
                  <a>设施</a>
                </li>
                <li>
                  <a>地址</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={['form-item', style.formItem].join(' ')}>
            <div className="dropdown">
              <input type="text" placeholder="请输入丢失的交叉路口或建筑物名..." /></div>
          </div>
          <div className={['form-item', 'submit', style.formItem].join(' ')}>
            <div>
              <button type="button" onClick={this._handleClick.bind(this)}>确认</button>
            </div>
          </div>
        </div>
        <div className={style.mapContainer}>
          <div id="myMap"></div>
        </div>
      </div>
    );
  }
}
