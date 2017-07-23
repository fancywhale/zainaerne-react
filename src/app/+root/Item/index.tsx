import { loadItem } from '../../redux/modules/loss-items';
import * as React from 'react';
const { connect } = require('react-redux');
const { asyncConnect } = require('redux-connect');

import { ItemCard } from '+root/Item/components/ItemCard';
import { ItemPanel } from '+root/Item/components/ItemPanel';
import { ItemPickDate } from '+root/Item/components/ItemPickDate';
import { ItemIdentification } from '+root/Item/components/ItemIdentification';
import { ItemColor } from '+root/Item/components/ItemColor';
import { ItemPickLocation } from '+root/Item/components/ItemPickLocation';
import { IStore } from 'redux/IStore';
const style = require('./style.css');

@asyncConnect([{
  promise: ({ store: { dispatch } }) => {
    return dispatch(loadItem());
  },
}])
@connect(
  (state: IStore) => {
    return { ...state.lossItem }
  },
)
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
