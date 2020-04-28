import React from 'react';

import guildsJson from './data/guilds.json';

import { Route, Switch } from 'react-router-dom';

import { Guild } from './models/guild';
import { GuildWar } from './models/guild-war';
import { GuildWarsData } from './data/guild-wars/guild-wars-data';

import GuildWars from './guild-wars/GuildWars';
import Home from './home/Home';
import PageNotFound from './404/PageNotFound';
import Players from './players/Players';
import SiteHeader from './site-header/SiteHeader';
import Tournaments from './tournaments/Tournaments';

import './App.scss';

const App: React.FC = () => {
  const guilds = Guild.arrayFromJson(guildsJson);
  const guildWars = GuildWar.arrayFromJson(GuildWarsData.data());

  return (
    <section id="app-container">
      <SiteHeader></SiteHeader>
      <section>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/guild-wars">
            <GuildWars guilds={guilds} wars={guildWars} />
          </Route>
          <Route exact path="/tournaments">
            <Tournaments />
          </Route>
          <Route exact path="/players">
            <Players />
          </Route>
          <Route component={PageNotFound} />
        </Switch>
      </section>
    </section>
  );
};

export default App;
