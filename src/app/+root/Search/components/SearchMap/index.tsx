import * as React from 'react';

const style = require('./style.css');

declare const BMap;

export class SearchMap extends React.Component<any, any> {
  public render() {
    const mapStyle = {
      height: '100%',
      width: '100%'
    };

    return (
      <div className={style.SearchMap}>
        <div id="map" style={mapStyle}></div>
      </div>
    );
  }

  public componentDidMount() {
    var map = new BMap.Map("map");    // 创建Map实例
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
    map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
    map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true); 
  }
}
