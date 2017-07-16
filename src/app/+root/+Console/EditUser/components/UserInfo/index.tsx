import * as React from 'react';

const style = require('./style.css');

export class UserInfo extends React.Component<any, any> {
  public render() {
    return (
      <div className={style.UserInfo}>
        <div className="panel panel-default">
          <div className="panel-heading">个人信息</div>
          <div className="panel-body">
            <div className={["container-fluid", style.baseInfo].join(' ')}>
              <div className={[style.row, 'row'].join(' ')}>
                <div className={[style['col-sm-3'], 'col-sm-3', 'text-right'].join(' ')}>姓氏</div>
                <div className="col-sm-9">
                  <div className="form-group">
                    <input className="form-control" /></div>
                </div>
              </div>
              <div className={[style.row, 'row'].join(' ')}>
                <div className={[style['col-sm-3'], 'col-sm-3', 'text-right'].join(' ')}>名字</div>
                <div className="col-sm-9">
                  <div className="form-group">
                    <input className="form-control" /></div>
                </div>
              </div>
              <div className={[style.row, 'row'].join(' ')}>
                <div className={[style['col-sm-3'], 'col-sm-3', 'text-right'].join(' ')}>邮箱</div>
                <div className="col-sm-9">
                  <div className="form-group">
                    <input className="form-control" /></div>
                </div>
              </div>
              <div className={[style.row, 'row'].join(' ')}>
                <div className={[style['col-sm-3'], 'col-sm-3', 'text-right'].join(' ')}>手机</div>
                <div className="col-sm-9">
                  <div className="form-group">
                    <input className="form-control" /></div>
                </div>
              </div>
              <div className={[style.row, 'row'].join(' ')}>
                <div className={[style['col-sm-3'], 'col-sm-3', 'text-right'].join(' ')}>微信</div>
                <div className="col-sm-9">
                  <div className="form-group">
                    <input className="form-control" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
