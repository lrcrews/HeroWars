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

interface WarStats {
  bridgeAttacksUsed: number;
  heroAttacksUsed: number;
  heroDefensesWon: number;
  heroPositionsCaptured: number;
  heroTotalAttackPower: number;
  titanAttacksUsed: number;
  titanDefensesWon: number;
  titanPositionsCaptured: number;
  titanTotalAttackPower: number;
}

const warStatsInitialState: WarStats = {
  bridgeAttacksUsed: 0,
  heroAttacksUsed: 0,
  heroDefensesWon: 0,
  heroPositionsCaptured: 0,
  heroTotalAttackPower: 0,
  titanAttacksUsed: 0,
  titanDefensesWon: 0,
  titanPositionsCaptured: 0,
  titanTotalAttackPower: 0,
};

interface TotalStats {
  them: WarStats;
  us: WarStats;
}

const totalStatsInitialState = {
  them: _.cloneDeep(warStatsInitialState),
  us: _.cloneDeep(warStatsInitialState),
};

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

  const [stats, setStats] = useState<TotalStats>(_.cloneDeep(totalStatsInitialState));

  useEffect(() => {
    const updatedStats: TotalStats = _.cloneDeep(totalStatsInitialState);
    _.each(war.battles, (battle) => {
      const key = battle.attacker.guildId === Guild.ASSASSINS_ID ? 'us' : 'them';
      const otherKey = battle.attacker.guildId === Guild.ASSASSINS_ID ? 'them' : 'us';
      if (Fortification.IS_HERO_FORT_ID(battle.fortificationId)) {
        updatedStats[key].heroAttacksUsed += 1;
        updatedStats[key].heroTotalAttackPower += battle.attacker.power;
        battle.positionCaptured
          ? (updatedStats[key].heroPositionsCaptured += 1)
          : (updatedStats[otherKey].heroDefensesWon += 1);
      } else {
        // it's a titan fort
        updatedStats[key].titanAttacksUsed += 1;
        updatedStats[key].titanTotalAttackPower += battle.attacker.power;
        battle.positionCaptured
          ? (updatedStats[key].titanPositionsCaptured += 1)
          : (updatedStats[otherKey].titanDefensesWon += 1);
        if (battle.fortificationId === Fortification.BRIDGE_ID) {
          updatedStats[key].bridgeAttacksUsed += 1;
        }
      }
    });
    setStats(updatedStats);
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
          <div className="value-us">
            <span className="additional-data">
              (Hero: {stats.us.heroAttacksUsed} | Titan: {stats.us.titanAttacksUsed})
            </span>
            <span className="two-digit">{stats.us.heroAttacksUsed + stats.us.titanAttacksUsed}</span>
          </div>
          <div className="name">attacks used</div>
          <div className="value-them">
            <span className="two-digit">{stats.them.heroAttacksUsed + stats.them.titanAttacksUsed}</span>
            <span className="additional-data">
              (Hero: {stats.them.heroAttacksUsed} | Titan: {stats.them.titanAttacksUsed})
            </span>
          </div>
        </li>
        <li className="stat">
          <div className="value-us">
            <span className="additional-data">
              (Hero: {stats.us.heroPositionsCaptured} | Titan: {stats.us.titanPositionsCaptured})
            </span>
            <span className="two-digit">{stats.us.heroPositionsCaptured + stats.us.titanPositionsCaptured}</span>
          </div>
          <div className="name">positions captured</div>
          <div className="value-them">
            <span className="two-digit">{stats.them.heroPositionsCaptured + stats.them.titanPositionsCaptured}</span>
            <span className="additional-data">
              (Hero: {stats.them.heroPositionsCaptured} | Titan: {stats.them.titanPositionsCaptured})
            </span>
          </div>
        </li>
        <li className="stat">
          <div className="value-us">
            <span className="additional-data">
              (Hero: {stats.us.heroDefensesWon} | Titan: {stats.us.titanDefensesWon})
            </span>
            <span className="two-digit">{stats.us.heroDefensesWon + stats.us.titanDefensesWon}</span>
          </div>
          <div className="name">successful defenses</div>
          <div className="value-them">
            <span className="two-digit">{stats.them.heroDefensesWon + stats.them.titanDefensesWon}</span>
            <span className="additional-data">
              (Hero: {stats.them.heroDefensesWon} | Titan: {stats.them.titanDefensesWon})
            </span>
          </div>
        </li>
        <li className="stat">
          <div className="value-us">{stats.us.bridgeAttacksUsed}</div>
          <div className="name">bridge attacks</div>
          <div className="value-them">{stats.them.bridgeAttacksUsed}</div>
        </li>
        <li className="stat">
          <div className="value-us">{stats.us.heroTotalAttackPower}</div>
          <div className="name">total hero atk. power</div>
          <div className="value-them">{stats.them.heroTotalAttackPower}</div>
        </li>
        <li className="stat">
          <div className="value-us">{stats.us.titanTotalAttackPower}</div>
          <div className="name">total titan atk. power</div>
          <div className="value-them">{stats.them.titanTotalAttackPower}</div>
        </li>
      </ul>
      {!_.isEmpty(children) && children}
    </div>
  );
};
export default WarView;
