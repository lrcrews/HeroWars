import React, { PropsWithChildren, useEffect, useState } from 'react';

import * as _ from 'lodash';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faCheck } from '@fortawesome/free-solid-svg-icons';

import badgeImg from '../../data/misc-images/icon-battle.png';
import victoryPointIconImg from '../../data/misc-images/icon-victory-point.png';
import vsIconImg from '../../data/misc-images/icon-vs.png';

import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';

import './WarHeader.scss';

export interface WarOption {
  display: string;
  id: number;
}

export interface WarHeaderProps extends PropsWithChildren<{}> {
  assassinsGuild: Guild;
  competitorGuild: Guild;
  war: GuildWar;
  warOptions: Array<WarOption>;
  onWarUpdate: (warId: number) => void;
}

const WarHeader: React.FC<WarHeaderProps> = (props: WarHeaderProps) => {
  const { assassinsGuild, children, competitorGuild, war, warOptions, onWarUpdate } = props;

  const [optionsVisible, setOptionsVisible] = useState(false);

  const [attacksUsed, setAttacksUsed] = useState(0);
  const [defensesWon, setDefensesWon] = useState(0);
  const [positionsCaptured, setPositionsCaptured] = useState(0);
  const [positionsLost, setPositionsLost] = useState(0);

  useEffect(() => {
    let attacksUsed = 0;
    let defensesWon = 0;
    let positionsCaptured = 0;
    let positionsLost = 0;
    _.each(war.battles, (battle) => {
      if (battle.attacker.guildId === 1) {
        attacksUsed += 1;
        if (battle.positionCaptured) {
          positionsCaptured += 1;
        }
      } else {
        // we're the defender
        if (battle.positionCaptured) {
          positionsLost += 1;
        } else {
          defensesWon += 1;
        }
      }
    });
    setAttacksUsed(attacksUsed);
    setDefensesWon(defensesWon);
    setPositionsCaptured(positionsCaptured);
    setPositionsLost(positionsLost);
  }, [war]);

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

  const optionSelected = (id: number): boolean => {
    return id === war.id;
  };

  const updateWarSelection = (id: number): void => {
    setOptionsVisible(false);
    if (id !== war.id) {
      onWarUpdate(id);
    }
  };

  return (
    <div className="war-header">
      <div className="matchup-date font-small">
        <div className="war-select">
          <div className="current-selection" onClick={(): void => setOptionsVisible(!optionsVisible)}>
            <span className="war-week">
              War Week {war?.warWeek} | {war?.warDay}
            </span>
            <span className="date">({war?.warDateString})</span>
            {!optionsVisible && <FontAwesomeIcon icon={faAngleDown} className="affordance" />}
            {optionsVisible && <FontAwesomeIcon icon={faAngleUp} className="affordance" />}
          </div>
          <ul className={optionsVisible ? 'options visible' : 'options'}>
            {warOptions.map((warOption, index) => {
              return (
                <li
                  key={index}
                  className={optionSelected(warOption.id) ? 'selected option' : 'option'}
                  onClick={(): void => updateWarSelection(warOption.id)}
                >
                  {warOption.display}
                  {optionSelected(warOption.id) && <FontAwesomeIcon icon={faCheck} className="icon" />}
                </li>
              );
            })}
          </ul>
        </div>
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
      <ul className="stats">
        <li className="stat">
          <span className="font-large">{attacksUsed}</span>
          <span className="font-small">/40</span>
          <div className="font-normal">attacks used</div>
        </li>
        <li className="stat">
          <span className="font-large">{positionsCaptured}</span>
          <span className="font-small">/40</span>
          <div className="font-normal">positions captured</div>
        </li>
        <li className="stat">
          <span className="font-large">{defensesWon}</span>
          <div className="font-normal">successful defenses</div>
        </li>
        <li className="stat">
          <span className="font-large">{positionsLost}</span>
          <span className="font-small">/40</span>
          <div className="font-normal">positions lost</div>
        </li>
      </ul>
      {!_.isEmpty(children) && children}
    </div>
  );
};
export default WarHeader;
