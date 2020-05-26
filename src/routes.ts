import GuildWars from './guild-wars/GuildWars';
import Home from './home/Home';
import Player from './players/Player';
import Tournaments from './tournaments/Tournaments';

const routes = [
  {
    path: '/guild-wars',
    component: GuildWars,
  },
  {
    path: '/',
    component: Home,
  },
  {
    path: '/players/:name',
    component: Player,
  },
  {
    path: '/tournaments',
    component: Tournaments,
  },
];
export default routes;
