import React from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from './routes';

import PageNotFound from './404/PageNotFound';

import './App.scss';

const App: React.FC = () => {
  return (
    <section id="app-container">
      <header>{/* <SiteHeader></SiteHeader> */}</header>
      <section>
        <Switch>
          {routes.map((route, i) => (
            <Route key={i} exact path={route.path} render={(props): JSX.Element => <route.component />} />
          ))}
          <Route component={PageNotFound} />
        </Switch>
      </section>
    </section>
  );
};

export default App;
