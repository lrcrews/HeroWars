import GuildWars from './guild-wars/GuildWars';
import Home from './home/Home';
import Players from './players/Players';
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
    path: '/players',
    component: Players,
  },
  {
    path: '/tournaments',
    component: Tournaments,
  },
];
export default routes;
