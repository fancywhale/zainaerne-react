import * as React from 'react';
const style = require('./style.css');

const avatar = 'data:image/jpeg;base64,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' +
    'eCkd2xTDdsF01C7unj5HatDmNkkM+9JWqyNH//Z';


export const ItemCard = () => (
  <div className={style.ItemCard}>
    <div className={style.gallery}>
      <div
        className={[style.carousel, 'carousel', 'slide'].join(' ')}
        id="galleryCarousel">
        <ol className="carousel-indicators">
          <li></li>
          <li></li>
          <li className="active"></li>
        </ol>
        <div className="carousel-inner">
          <div className="item">
            <img src="http://pic1.win4000.com/wallpaper/d/566a3e0213d6d.jpg"/>
            <div className="carousel-caption"></div>
          </div>
          <div className="item">
            <img src="http://pic1.win4000.com/wallpaper/d/566a3e0213d6d.jpg"/>
            <div className="carousel-caption"></div>
          </div>
          <div className="item active">
            <img src="http://pic1.win4000.com/wallpaper/d/566a3e0213d6d.jpg"/>
            <div className="carousel-caption"></div>
          </div>
        </div>
      </div>
    </div>
    <div className={style.infoHeader}>
      <div className="row">
        <div className="col-xs-8">
          <h5>钱包</h5>
          <p className={style.sub}>
            <span className="fa fa-map-marker fa-lg" color="primary" />&nbsp;
            济南路 自忠路 交叉口</p>
        </div>
        <div className="col-xs-4">
          <div className="avatar pull-right"><img src={avatar}/>
            <label>乔志林</label>
          </div>
        </div>
      </div>
    </div>
  </div>
);