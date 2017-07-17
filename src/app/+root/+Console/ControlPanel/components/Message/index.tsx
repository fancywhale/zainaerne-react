import * as React from 'react';

const style = require('./style.css');

export class Message extends React.Component<any, any> {
  public render() {
    return (
      <div className={[style.Message, 'panel panel-default'].join(' ')}>
        <div className="panel-heading">
          消息
        </div>
        <div className="panel-body">
          <table className="table">
            <tbody>
              <tr>
                <td className={style.titleCol}>
                  <a href="#">揭秘阿里10年分布式技术沉淀：7月27日独家直播，限时报名！</a>
                </td>
                <td>2017-07-12 14:33:41</td>
                <td>活动消息-优惠活动</td>
              </tr>
              <tr>
                <td className={style.titleCol}>
                  <a href="#">揭秘阿里10年分布式技术沉淀：7月27日独家直播，限时报名！</a>
                </td>
                <td>2017-07-12 14:33:41</td>
                <td>活动消息-优惠活动</td>
              </tr>
              <tr>
                <td className={style.titleCol}>
                  <a href="#">揭秘阿里10年分布式技术沉淀：7月27日独家直播，限时报名！</a>
                </td>
                <td>2017-07-12 14:33:41</td>
                <td>活动消息-优惠活动</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
