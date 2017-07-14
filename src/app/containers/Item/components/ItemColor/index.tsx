import * as React from 'react';

const style = require('./style.css');

export const ItemColor = () => (
  <div className={style.ItemColor}>
    <h6 className="row-title">颜色</h6>
    <div>
      <span className="palette" style={{
        background: '#d9534f'
      }}></span>
      <span className="palette" style={{
        background: '#2ca1f4'
      }}></span>
    </div>
  </div>
);
