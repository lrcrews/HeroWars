import React from 'react';

import { Link } from 'react-router-dom';

import './Home.scss';

const Home: React.FC = () => {
  return (
    <main id="home-page">
      <div className="welcome tile">
        <div className="font-title">Welcome Assassins!</div>
        <div className="font-normal">
          Here you can find stats for our Guild Wars, with pages for each Player, and Guild pages coming soon!
        </div>
        <ul className="links">
          <li>
            <Link to="/guild-wars">
              <button>Guild Wars</button>
            </Link>
          </li>
          <li>
            <Link to="/players">
              <button>Players</button>
            </Link>
          </li>
          <li>
            <Link to="/titans">
              <button>Tools</button>
            </Link>
          </li>
        </ul>
      </div>
      <div className="info tile">
        <div className="font-subtitle">Gold League, and recruiting!</div>
        <div className="font-normal">
          Interested in joining the top guild on server 184? Then{' '}
          <a href="https://discord.gg/neeDCs" target="_blank" rel="noopener noreferrer">
            message us on Discord
          </a>
          !
        </div>
        <div className="font-normal">
          You could also message our leader directly on discord @ postgoats#8309, or on line chat @ postgoats.
        </div>
        <div className="font-normal">
          We're always up to talk to active players, and we look for more than just high level, so if you're interested
          at all do reach out!
        </div>
      </div>
      <div className="info tile">
        <div className="font-subtitle">Not quite Gold League yourself? Good news!</div>
        <div className="font-normal">
          We also have an acamedy guild on server 184, just{' '}
          <a href="https://discord.gg/neeDCs" target="_blank" rel="noopener noreferrer">
            message us on Discord
          </a>{' '}
          to learn more!
        </div>
      </div>
    </main>
  );
};
export default Home;
