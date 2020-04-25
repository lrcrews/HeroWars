import React, { useEffect, useState } from 'react';

import guildsJson from './data/guilds.json';
import guildWarsJson from './data/guild-wars.json';

import { Route, Switch } from 'react-router-dom';

import { Guild } from './models/guild';
import { GuildWar } from './models/guild-war';

import GuildWars from './guild-wars/GuildWars';
import Home from './home/Home';
import PageNotFound from './404/PageNotFound';
import Players from './players/Players';
import SiteHeader from './site-header/SiteHeader';
import Tournaments from './tournaments/Tournaments';

import './App.scss';

const App: React.FC = () => {
  const [guilds, setGuilds] = useState<Array<Guild>>([]);
  const [guildWars, setGuildWars] = useState<Array<GuildWar>>([]);

  useEffect(() => {
    setGuilds(Guild.arrayFromJson(guildsJson));
    setGuildWars(GuildWar.arrayFromJson(guildWarsJson));
  }, []);

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
