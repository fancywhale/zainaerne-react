import * as React from 'react';

export const HomeLossList = () => (
  <div className="list">
    <div className="list-header">
      <h3>
        <span>您是否见过它们？</span>
      </h3>
    </div>
    <div className="list-item-container">
      <div className="list-item">
        <a href="/item">
          <div className="list-item-inner">
            <div className="img-holder">
              <div style={{backgroundImage:'url(http://pic1.win4000.com/wallpaper/d/566a3e0213d6d.jpg)'}}/>
            </div>
            <div className="info">
              <div className="main-info">
                <span className="fa fa-map-marker"/>
                <span>莫干山路 中潭路附近</span>
              </div>
              <div className="sub-info">
                <span>拉布拉多</span>
              </div>
              <div className="third-info">
                <span>悬赏额:</span>
                <span className="money">
                  <span className="fa fa-usd"></span>
                  <span>1000</span>
                </span>
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
                style={{backgroundImage:'url(http://file25.mafengwo.net/M00/64/08/wKgB4lMlZMGAEhr8AAEH_9N_bA421.rbook_comment.w1024.jpeg)'}}></div>
            </div>
            <div className="info">
              <div className="main-info">
                <span className="fa fa-map-marker"></span>
                <span>宝山路 上大路路口附近</span>
              </div>
              <div className="sub-info">
                <span>银狐</span>
              </div>
              <div className="third-info">
                <span>悬赏额:</span>
                <span className="money">
                  <span className="fa fa-usd"></span>
                  <span>1000</span>
                </span>
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
                style={{backgroundImage:'url(http://img3.imgtn.bdimg.com/it/u=1721476391,1990310043&amp;fm=214&amp;gp=0.jpg)'}}></div>
            </div>
            <div className="info">
              <div className="main-info">
                <span className="fa fa-map-marker"></span>
                <span>黄兴公园附近</span>
              </div>
              <div className="sub-info">
                <span>哈士奇</span>
              </div>
              <div className="third-info">
                <span>悬赏额:</span>
                <span className="money">
                  <span className="fa fa-usd"></span>
                  <span>1000</span>
                </span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
);