import React, { PropsWithChildren, useEffect, useState } from 'react';

import * as _ from 'lodash';

import badgeImg from '../../data/misc-images/icon-battle.png';
import victoryPointIconImg from '../../data/misc-images/icon-victory-point.png';
import vsIconImg from '../../data/misc-images/icon-vs.png';

import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';

import CustomSelect, { Option } from './CustomSelect';

import './WarView.scss';

export interface WarViewProps extends PropsWithChildren<{}> {
  assassinsGuild: Guild;
  competitorGuild: Guild;
  war: GuildWar;
  warOptions: Array<Option>;
  onWarUpdate: (option: Option) => void;
}

const WarView: React.FC<WarViewProps> = (props: WarViewProps) => {
  const { assassinsGuild, children, competitorGuild, war, warOptions, onWarUpdate } = props;

  const [selectedOption, setSelectedOption] = useState(_.first(warOptions));

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

  const onOptionUpdate = (option: Option): void => {
    setSelectedOption(option);
    onWarUpdate(option);
  };

  return (
    <div className="war-view">
      <div className="matchup-date font-small">
        <CustomSelect options={warOptions} selectedOption={selectedOption} onOptionUpdate={onOptionUpdate} />
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
export default WarView;
