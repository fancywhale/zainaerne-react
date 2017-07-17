import * as React from 'react';

const style = require('./style.css');

export class MailList extends React.Component<any, any>{
  public render() {
    return (
      <div className={style.MailList}>
        <table className="table">
          <thead>
            <tr>
              <th>
                <input type="checkbox"/>
              </th>
              <th>标题内容</th>
              <th>提交时间</th>
              <th>类型</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="checkbox"/>
              </td>
              <td className={style.titleCol}>
                <a href="#">揭秘阿里10年分布式技术沉淀：7月27日独家直播，限时报名！</a>
              </td>
              <td>2017-07-12 14:33:41</td>
              <td>活动消息-优惠活动</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox"/>
              </td>
              <td className={style.titleCol}>
                <a href="#">揭秘阿里10年分布式技术沉淀：7月27日独家直播，限时报名！</a>
              </td>
              <td>2017-07-12 14:33:41</td>
              <td>活动消息-优惠活动</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox"/>
              </td>
              <td className={style.titleCol}>
                <a href="#">揭秘阿里10年分布式技术沉淀：7月27日独家直播，限时报名！</a>
              </td>
              <td>2017-07-12 14:33:41</td>
              <td>活动消息-优惠活动</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
