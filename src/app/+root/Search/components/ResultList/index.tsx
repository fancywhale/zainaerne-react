import * as React from 'react';

const style = require('./style.css');

export const ResultList = () => {
  let items = [
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ];

  let itemCmps = items.map((i, k) =>
    <div className="list-item" key={k}>
      <a href="/item">
        <div className="list-item-inner">
          <div className="img-holder">
            <div
              style={{ backgroundImage: 'url(http://pic1.win4000.com/wallpaper/d/566a3e0213d6d.jpg)' }}></div>
          </div>
          <div className="info">
            <div className="main-info">
              <span className="fa fa-map-marker"></span>
              <span>莫干山路 中潭路附近</span>
            </div>
            <div className="sub-info">
              <span>拉布拉多</span>
            </div>
            <div className="third-info">
              <span>悬赏额:</span>
              <span className="money">
                <span className="fa fa-usd"></span>
                <span>{1000 * i}</span>
              </span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );

  return (
    <div className={style.ResultList}>
      <div className={style.sideHeader}>
        <div className={style.leftContent}>
          <span>已经为您找到了5个匹配的结果</span>
        </div>
        <div className={style.rightContent}>
          <span>若没有您的物品您在这里申报遗失</span>
          <span>
            <span className={['fa', 'fa-hand-rock-o', style.tip].join(' ')} />
          </span>
        </div>
      </div>
      <div className="list">
        <div className="list-item-container">
          {itemCmps}
        </div>
      </div>
    </div>
  );
};
