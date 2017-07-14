import * as React from 'react';

export const HomeFoundList = () => (
  <div className="list">
    <div className="list-header">
      <h3>
        <span>他们在找主人</span>
      </h3>
    </div>
    <div className="list-item-container">
      <div className="list-item">
        <a href="/item">
          <div className="list-item-inner">
            <div className="img-holder">
              <div
                style={{ backgroundImage: 'url(http://img0.imgtn.bdimg.com/it/u=763218211,3430129751&amp;fm=214&amp;gp=0.jpg)' }}></div>
            </div>
            <div className="info">
              <div className="main-info">
                <span className="fa fa-map-marker"></span>
                <span>莫干山路 中潭路附近</span>
              </div>
              <div className="sub-info">
                <span>拉布拉多</span>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="list-item">
        <a href="/item">
          <div className="list-item-inner">
            <div className="img-holder">
              <div
                style={{ backgroundImage: 'url(http://www.gzahi.gov.cn/uploadImages/1425976285268.jpg)' }}></div>
            </div>
            <div className="info">
              <div className="main-info">
                <span className="fa fa-map-marker"></span>
                <span>宝山路 上大路路口附近</span>
              </div>
              <div className="sub-info">
                <span>银狐</span>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="list-item">
        <a href="/item">
          <div className="list-item-inner">
            <div className="img-holder">
              <div
                style={{ backgroundImage: 'url(http://pic1.win4000.com/wallpaper/8/568b294325968.jpg)' }}></div>
            </div>
            <div className="info">
              <div className="main-info">
                <span className="fa fa-map-marker"></span>
                <span>黄兴公园附近</span>
              </div>
              <div className="sub-info">
                <span>哈士奇</span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
);