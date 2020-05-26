import React from 'react';

import { Route, RouteComponentProps, Switch } from 'react-router-dom';

import { Fortification } from './models/fortification';
import { Guild } from './models/guild';
import { GuildWarsData } from './data/guild-wars/guild-wars-data';

import GuildWars from './guild-wars/GuildWars';
import Home from './home/Home';
import PageNotFound from './404/PageNotFound';
import Player from './players/Player';
import SiteHeader from './site-header/SiteHeader';
import Tournaments from './tournaments/Tournaments';

import './App.scss';

interface MatchParams {
  name: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface MatchProps extends RouteComponentProps<MatchParams> {}

const App: React.FC = () => {
  const fortifications = Fortification.ALL();
  const guilds = Guild.ALL();
  const guildWars = GuildWarsData.data();

  return (
    <section id="app-container">
      <SiteHeader></SiteHeader>
      <section id="main-content-container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/guild-wars">
            <GuildWars fortifications={fortifications} guilds={guilds} wars={guildWars} />
          </Route>
          <Route exact path="/tournaments">
            <Tournaments />
          </Route>
          <Route
            path="/players/:name"
            render={({ match }: MatchProps): JSX.Element => (
              <Player fortifications={fortifications} guilds={guilds} name={match.params.name} wars={guildWars} />
            )}
          />
          <Route component={PageNotFound} />
        </Switch>
      </section>
    </section>
  );
};

export default App;
