import React, { PropsWithChildren, useEffect, useState } from 'react';

import * as _ from 'lodash';

import badgeImg from '../../data/misc-images/icon-battle.png';
import victoryPointIconImg from '../../data/misc-images/icon-victory-point.png';
import vsIconImg from '../../data/misc-images/icon-vs.png';

import { Fortification } from '../../models/fortification';
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

  const [attacksUsedThem, setAttacksUsedThem] = useState(0);
  const [attacksUsedUs, setAttacksUsedUs] = useState(0);

  const [bridgeAttacksUsedThem, setBridgeAttacksUsedThem] = useState(0);
  const [bridgeAttacksUsedUs, setBridgeAttacksUsedUs] = useState(0);

  const [defensesWonThem, setDefensesWonThem] = useState(0);
  const [defensesWonUs, setDefensesWonUs] = useState(0);

  const [positionsCapturedThem, setPositionsCapturedThem] = useState(0);
  const [positionsCapturedUs, setPositionsCapturedUs] = useState(0);

  const [totalHeroAtkPwrThem, setTotalHeroAtkPwrThem] = useState(0);
  const [totalHeroAtkPwrUs, setTotalHeroAtkPwrUs] = useState(0);

  const [totalTitanAtkPwrThem, setTotalTitanAtkPwrThem] = useState(0);
  const [totalTitanAtkPwrUs, setTotalTitanAtkPwrUs] = useState(0);

  useEffect(() => {
    let attacksUsedThem = 0;
    let attacksUsedUs = 0;
    let bridgeAttacksUsedThem = 0;
    let bridgeAttacksUsedUs = 0;
    let defensesWonThem = 0;
    let defensesWonUs = 0;
    let positionsCapturedThem = 0;
    let positionsCapturedUs = 0;
    let totalHeroAtkPwrThem = 0;
    let totalHeroAtkPwrUs = 0;
    let totalTitanAtkPwrThem = 0;
    let totalTitanAtkPwrUs = 0;
    _.each(war.battles, (battle) => {
      if (battle.attacker.guildId === Guild.ASSASSINS_ID) {
        attacksUsedUs += 1;
        battle.positionCaptured ? (positionsCapturedUs += 1) : (defensesWonThem += 1);
        if (battle.fortificationId === Fortification.BRIDGE_ID) {
          bridgeAttacksUsedUs += 1;
        }
        Fortification.IS_HERO_FORT_ID(battle.fortificationId)
          ? (totalHeroAtkPwrUs += battle.attacker.power)
          : (totalTitanAtkPwrUs += battle.attacker.power);
      } else {
        // we're the defender
        attacksUsedThem += 1;
        battle.positionCaptured ? (positionsCapturedThem += 1) : (defensesWonUs += 1);
        if (battle.fortificationId === 4) {
          bridgeAttacksUsedThem += 1;
        }
        Fortification.IS_HERO_FORT_ID(battle.fortificationId)
          ? (totalHeroAtkPwrThem += battle.attacker.power)
          : (totalTitanAtkPwrThem += battle.attacker.power);
      }
    });
    setAttacksUsedThem(attacksUsedThem);
    setAttacksUsedUs(attacksUsedUs);
    setBridgeAttacksUsedThem(bridgeAttacksUsedThem);
    setBridgeAttacksUsedUs(bridgeAttacksUsedUs);
    setDefensesWonThem(defensesWonThem);
    setDefensesWonUs(defensesWonUs);
    setPositionsCapturedThem(positionsCapturedThem);
    setPositionsCapturedUs(positionsCapturedUs);
    setTotalHeroAtkPwrThem(totalHeroAtkPwrThem);
    setTotalHeroAtkPwrUs(totalHeroAtkPwrUs);
    setTotalTitanAtkPwrThem(totalTitanAtkPwrThem);
    setTotalTitanAtkPwrUs(totalTitanAtkPwrUs);
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
      <ul className="stats font-normal">
        <li className="stat">
          <div className="value-us">{attacksUsedUs}</div>
          <div className="name">attacks used</div>
          <div className="value-them">{attacksUsedThem}</div>
        </li>
        <li className="stat">
          <div className="value-us">{positionsCapturedUs}</div>
          <div className="name">positions captured</div>
          <div className="value-them">{positionsCapturedThem}</div>
        </li>
        <li className="stat">
          <div className="value-us">{defensesWonUs}</div>
          <div className="name">successful defenses</div>
          <div className="value-them">{defensesWonThem}</div>
        </li>
        <li className="stat">
          <div className="value-us">{bridgeAttacksUsedUs}</div>
          <div className="name">bridge attacks</div>
          <div className="value-them">{bridgeAttacksUsedThem}</div>
        </li>
        <li className="stat">
          <div className="value-us">{totalHeroAtkPwrUs}</div>
          <div className="name">total hero atk. power</div>
          <div className="value-them">{totalHeroAtkPwrThem}</div>
        </li>
        <li className="stat">
          <div className="value-us">{totalTitanAtkPwrUs}</div>
          <div className="name">total titan atk. power</div>
          <div className="value-them">{totalTitanAtkPwrThem}</div>
        </li>
      </ul>
      {!_.isEmpty(children) && children}
    </div>
  );
};
export default WarView;
