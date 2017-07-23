import { StoreAction } from '../../models/StoreAction';
import * as React from 'react';
const { connect } = require('react-redux');

import { FilterPanel } from './components/FilterPanel';
import { ResultList } from './components/ResultList';
import { SearchMap } from './components/SearchMap';
import { toAppMode, toWebMode } from 'redux/modules/app';
import { IApp } from 'models/app';
const style = require('./style.css');

interface IProps {
  app: IApp,
  toAppMode: Redux.ActionCreator<StoreAction<IApp>>;
  toWebMode: Redux.ActionCreator<StoreAction<IApp>>; 
}

@connect(
  (state) => ({ app: state.app }),
  (dispatch) => ({
    toAppMode: () => dispatch(toAppMode()),
    toWebMode: () => dispatch(toWebMode()),
  }),
)
export class Search extends React.Component<IProps, any> {

  public componentWillMount() {
    const { toAppMode } = this.props;
    toAppMode();
  }
  
  public render() {
    return (
      <div className={[style.Search, 'full-content'].join(' ')}>
        <div className={style.mainContainer}>
          <div className={style.leftContainer}>
            <div>
              <FilterPanel />
            </div>
            <ResultList />
          </div>
          <div className={style.rightContainer}>
            <SearchMap />
          </div>
        </div>
      </div>
    );
  }
}
