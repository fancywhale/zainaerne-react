import * as React from 'react';

const style = require('./style.css');
console.log(style);

export const FilterPanel = () => (
  <div className={style.FilterPanel}>
    <span>
      <div className={[style.searchItem, style.date].join(' ')}>
        <div>
          <button>
            <span>开始时间</span>
            <span className={style.iconHolder}>
              <svg viewBox="0 0 1000 1000">
                <path
                  d="M694.4 242.4l249.1 249.1c11 11 11 21 0 32L694.4 772.7c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210.1-210.1H67.1c-13 0-23-10-23-23s10-23 23-23h805.4L662.4 274.5c-21-21.1 11-53.1 32-32.1z"/>
              </svg>
            </span>
            <span>结束时间</span>
            <span className="fa fa-caret-down"/>
          </button>
        </div>
      </div>
    </span>
    <span>
      <div className={[style.searchItem, style.itemType].join(' ')}>
        <div>
          <button>证件
            <span className="fa fa-caret-down"/>
          </button>
        </div>
      </div>
    </span>
  </div>
);