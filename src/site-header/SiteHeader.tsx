import React from 'react';

import { Link } from 'react-router-dom';

import guildBannerImg from '../data/guild-banners/assassins-banner.png';

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
          <Link to="/guild-wars">Wars</Link>
        </li>
        <li>
          <Link to="/battles">Battles</Link>
        </li>
      </ul>
    </header>
  );
};
export default SiteHeader;
