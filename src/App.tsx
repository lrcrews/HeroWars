import React from 'react';

import { Route, RouteComponentProps, Switch, useLocation } from 'react-router-dom';

import { Fortification } from './models/fortification';
import { Guild as GuildModel } from './models/guild';
import { GuildWarsData } from './data/guild-wars/guild-wars-data';

import Guild from './guilds/Guild';
import GuildWars from './guild-wars/GuildWars';
import Home from './home/Home';
import PageNotFound from './404/PageNotFound';
import Player from './players/Player';
import Players from './players/Players';
import SiteHeader from './site-header/SiteHeader';
import Titans from './tools/titans/Titans';
import Tournaments from './tournaments/Tournaments';

import './App.scss';

interface GuildMatchParams {
  id: string;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface GuildMatchProps extends RouteComponentProps<GuildMatchParams> {}

interface PlayersMatchParams {
  name: string;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PlayerMatchProps extends RouteComponentProps<PlayersMatchParams> {}

const App: React.FC = () => {
  const fortifications = Fortification.ALL();
  const guilds = GuildModel.ALL();
  const guildWars = GuildWarsData.data();

  const query = new URLSearchParams(useLocation().search);

  return (
    <section id="app-container">
      <SiteHeader></SiteHeader>
      <section id="main-content-container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/guild-wars">
            <GuildWars
              fortifications={fortifications}
              guilds={guilds}
              selectedWarOption={query.get('selectedWarOption')}
              wars={guildWars}
            />
          </Route>
          <Route
            path="/guilds/:id"
            render={({ match }: GuildMatchProps): JSX.Element => (
              <Guild allGuilds={guilds} selectedGuildId={Number.parseInt(match.params.id)} wars={guildWars} />
            )}
          />
          <Route exact path="/players">
            <Players wars={guildWars} />
          </Route>
          <Route
            path="/players/:name"
            render={({ match }: PlayerMatchProps): JSX.Element => (
              <Player fortifications={fortifications} guilds={guilds} name={match.params.name} wars={guildWars} />
            )}
          />
          <Route exact path="/titans">
            <Titans />
          </Route>
          <Route exact path="/tournaments">
            <Tournaments />
          </Route>
          <Route component={PageNotFound} />
        </Switch>
      </section>
    </section>
  );
};

export default App;
