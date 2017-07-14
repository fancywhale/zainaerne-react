import * as React from 'react';
import { ItemCard } from 'containers/Item/components/ItemCard/index';
import { ItemPanel } from 'containers/Item/components/ItemPanel/index';
import { ItemPickDate } from 'containers/Item/components/ItemPickDate/index';
import { ItemIdentification } from 'containers/Item/components/ItemIdentification/index';
import { ItemColor } from 'containers/Item/components/ItemColor/index';
import { ItemPickLocation } from 'containers/Item/components/ItemPickLocation/index';
const style = require('./style.css');

export class Item extends React.Component<any, any> {

  public render() {
    return (
      <div className={[style.Item, 'container'].join(' ')}>
        <div className="row">
          <div className="col-sm-8">
            <ItemCard />
            <hr />
            <ItemPickDate />
            <hr />
            <ItemIdentification />
            <hr />
            <ItemColor />
            <hr />
            <ItemPickLocation />
          </div>
          <div className="col-sm-4">
            <ItemPanel />
          </div>
        </div>
      </div>
    );
  }
}
