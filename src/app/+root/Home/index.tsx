import * as React from 'react';
import { HomeBanner } from './components/HomeBanner';
import { HomeSubNav } from './components/HomeSubNav';
import { HomeMap } from './components/HomeMap';
import { HomeSearchForm } from './components/HomeSearchForm';
import { HomeLossList } from './components/HomeLossList';
import { HomeFoundList } from './components/HomeFoundList';
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
