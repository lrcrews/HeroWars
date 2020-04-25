import React from 'react';

import * as _ from 'lodash';

import badgeImg from '../../data/misc-images/icon-battle.png';
import victoryPointIconImg from '../../data/misc-images/icon-victory-point.png';
import vsIconImg from '../../data/misc-images/icon-vs.png';

import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';

import './WarHeader.scss';

export interface WarHeaderProps {
  assassinsGuild: Guild;
  competitorGuild: Guild;
  war: GuildWar;
}

const WarHeader: React.FC<WarHeaderProps> = (props: WarHeaderProps) => {
  const { assassinsGuild, competitorGuild, war } = props;

  const assassinsPointTotal = (): number => {
    if (war) {
      return war.winningGuildId === 1 ? war.winningPointTotal : war.losingPointTotal;
    } else {
      return 0;
    }
  };

  const competitorPointTotal = (): number => {
    if (war) {
      return war.winningGuildId === 1 ? war.losingPointTotal : war.winningPointTotal;
    } else {
      return 0;
    }
  };

  const assassinsPointRatio = (): number => {
    if (war) {
      const totalPoints = war.winningPointTotal + war.losingPointTotal;
      return (assassinsPointTotal() / totalPoints) * 100;
    } else {
      return 0;
    }
  };

  const badgePosition = (): { [key: string]: string } => {
    return { left: `calc(${assassinsPointRatio()}% - 1rem)` }; // subtract half the badge width
  };

  const leftFillWidth = (): { [key: string]: string } => {
    return { width: `${assassinsPointRatio()}%` };
  };

  const rightFillWidth = (): { [key: string]: string } => {
    return { width: `${100 - assassinsPointRatio()}%` };
  };

  return (
    <div className="war-header">
      <div className="matchup-date font-small">
        <span className="war-week">
          War Week {war?.warWeek} | {war?.warDay}
        </span>
        <span className="date">({war?.warDateString})</span>
      </div>
      <div className="matchup">
        <img src={assassinsGuild?.bannerImagePath} alt="Assassins guild banner" className="guild-banner" />
        <div className="matchup-details">
          <div className="bar-graphic">
            <div className="left-fill" style={leftFillWidth()}>
              {/* I'm the left side of the bar graphic */}
            </div>
            <div className="badge" style={badgePosition()}>
              <img src={badgeImg} alt="" />
            </div>
            <div className="right-fill" style={rightFillWidth()}>
              {/* I'm the right side of the bar graphic */}
            </div>
          </div>
          <ul className="guild-names">
            <li>
              <ul>
                <li className="name">{assassinsGuild?.name}</li>
                <li className="points">
                  <div>{assassinsPointTotal()}</div>
                  <img src={victoryPointIconImg} alt="" />
                </li>
              </ul>
            </li>
            <li className="vs-badge">
              <img src={vsIconImg} alt="" />
            </li>
            <li>
              <ul>
                <li className="name">{competitorGuild?.name}</li>
                <li className="points">
                  <img src={victoryPointIconImg} alt="" />
                  <div>{competitorPointTotal()}</div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <img
          src={competitorGuild?.bannerImagePath}
          alt={`${competitorGuild?.name} guild banner`}
          className="guild-banner right-banner"
        />
      </div>
    </div>
  );
};
export default WarHeader;
