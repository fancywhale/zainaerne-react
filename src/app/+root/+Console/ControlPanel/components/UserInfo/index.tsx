import * as React from 'react';

const style = require('./style.css');

export class UserInfo extends React.Component<any, any> {
  public render() {
    return (
      <div className={[style.UserInfo, 'panel panel-default'].join(' ')}>
        <div className="panel-body">
          <div className={style.avatar}>
            <img src="http://img5.imgtn.bdimg.com/it/u=3757735100,2468917699&fm=26&gp=0.jpg"/>
          </div>
          <div className="text-center">
            <div>
              <h1>加志</h1>
            </div>
            <div>
              <a href="#">查看个人资料</a>
            </div>
            <div>
              <a href="#">编辑个人资料</a>
            </div>
          </div>
        </div>  
      </div>
    );
  }
}
