import React from 'react';

import { Link } from 'react-router-dom';

import guildBannerImg from './guild-banner.png';

import './SiteHeader.scss';

const SiteHeader: React.FC = () => {
  return (
    <header id="site-header">
      <img src={guildBannerImg} alt="Assassins guild banner" className="guild-banner" />
      <Link to="/">
        <div className="name">Assassins | Hero Wars</div>
      </Link>
      <ul className="links">
        <li>
          <Link to="/guild-wars">Guild Wars</Link>
        </li>
        <li>
          <Link to="/tournaments">Tournaments</Link>
        </li>
      </ul>
    </header>
  );
};
export default SiteHeader;
