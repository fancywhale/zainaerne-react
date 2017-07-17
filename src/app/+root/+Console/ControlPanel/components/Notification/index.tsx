import * as React from 'react';
const style = require('./style.css');

export class Notification extends React.Component<any, any>{
  public render() {
    return (
      <div className={[style.Notification, 'panel panel-default'].join(' ')}>
        <div className="panel-heading">通知</div>
        <div className="panel-body">
          <ul>
            <li>
              <div>
                <div>
                  <span>全新推出：获得￥339旅行基金。添加工作电子邮件地址，在踏上您的第一趟商务差旅后，您将获得￥339旅行基金。</span>
                </div>
                <div>
                  <a>
                    <i className="fa fa-times"></i>
                  </a>  
                </div>
              </div>  
              <hr/>
            </li>
            <li>
              <div>
                <div>
                  <span>全新推出：获得￥339旅行基金。添加工作电子邮件地址，在踏上您的第一趟商务差旅后，您将获得￥339旅行基金。</span>
                </div>
                <div>
                  <a>
                    <i className="fa fa-times"></i>
                  </a>  
                </div>
              </div>  
              <hr/>
            </li>
            <li>
              <div>
                <div>
                  <span>全新推出：获得￥339旅行基金。添加工作电子邮件地址，在踏上您的第一趟商务差旅后，您将获得￥339旅行基金。</span>
                </div>
                <div>
                  <a>
                    <i className="fa fa-times"></i>
                  </a>  
                </div>
              </div>  
              <hr/>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
