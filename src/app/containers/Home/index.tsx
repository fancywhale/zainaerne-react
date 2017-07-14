import * as React from 'react';
import { HomeBanner } from 'containers/Home/components/HomeBanner/index';
import { HomeSubNav } from 'containers/Home/components/HomeSubNav/index';
import { HomeMap } from 'containers/Home/components/HomeMap/index';
import { HomeSearchForm } from 'containers/Home/components/HomeSearchForm/index';
import { HomeLossList } from 'containers/Home/components/HomeLossList/index';
import { HomeFoundList } from 'containers/Home/components/HomeFoundList/index';
const style = require('./style.css');

class Home extends React.Component<any, any> {

  public render() {
    return (
      <div className={[style.Home, 'container'].join(' ')}>
        <HomeBanner />
        <HomeSubNav />
        <HomeSearchForm />
        <HomeMap />
        <HomeLossList />
        <HomeFoundList />
      </div>
    );
  }
}

export { Home }
