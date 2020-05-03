import GuildWars from './guild-wars/GuildWars';
import Home from './home/Home';
import Players from './players/Players';
import Tournaments from './tournaments/Tournaments';
import WarBattles from './guild-wars/WarBattles';

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
  {
    path: '/battles',
    component: WarBattles,
  },
];
export default routes;
