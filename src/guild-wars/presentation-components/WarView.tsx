import React, { PropsWithChildren, useEffect, useState } from 'react';

import * as _ from 'lodash';

import { Link } from 'react-router-dom';

import badgeImg from '../../data/misc-images/icon-battle.png';
import victoryPointIconImg from '../../data/misc-images/icon-victory-point.png';
import vsIconImg from '../../data/misc-images/icon-vs.png';

import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';

import CustomSelect, { Option } from './CustomSelect';
import InfoBox from './InfoBox';

import './WarView.scss';

interface WarStats {
  bridgeAttacksUsed: number;
  heroAttacksUsed: number;
  heroDefensesWon: number;
  heroFortificationsCaptured: Array<string>;
  heroPositionsCaptured: number;
  heroTotalAttackPower: number;
  titanAttacksUsed: number;
  titanDefensesWon: number;
  titanFortificationsCaptured: Array<string>;
  titanPositionsCaptured: number;
  titanTotalAttackPower: number;
}

const warStatsInitialState: WarStats = {
  bridgeAttacksUsed: 0,
  heroAttacksUsed: 0,
  heroDefensesWon: 0,
  heroFortificationsCaptured: [],
  heroPositionsCaptured: 0,
  heroTotalAttackPower: 0,
  titanAttacksUsed: 0,
  titanDefensesWon: 0,
  titanFortificationsCaptured: [],
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
  selectedOption: Option;
  war: GuildWar;
  warOptions: Array<Option>;
  onWarUpdate: (option: Option) => void;
}

const WarView: React.FC<WarViewProps> = (props: WarViewProps) => {
  const { assassinsGuild, children, competitorGuild, selectedOption, war, warOptions, onWarUpdate } = props;

  const [stats, setStats] = useState<TotalStats>(_.cloneDeep(totalStatsInitialState));

  useEffect(() => {
    const stats: TotalStats = _.cloneDeep(totalStatsInitialState);
    const fortificationWins: { [key: string]: Array<number> } = { us: [], them: [] };
    _.each(war.battles, (battle) => {
      const key = battle.attacker.guildId === Guild.ASSASSINS_ID ? 'us' : 'them';
      const otherKey = battle.attacker.guildId === Guild.ASSASSINS_ID ? 'them' : 'us';
      if (Fortification.IS_HERO_FORT_ID(battle.fortificationId)) {
        stats[key].heroAttacksUsed += 1;
        stats[key].heroTotalAttackPower += battle.attacker.power;
        if (battle.positionCaptured) {
          stats[key].heroPositionsCaptured += 1;
          fortificationWins[key].push(battle.fortificationId);
        } else {
          stats[otherKey].heroDefensesWon += 1;
        }
      } else {
        // it's a titan fort
        stats[key].titanAttacksUsed += 1;
        stats[key].titanTotalAttackPower += battle.attacker.power;
        if (battle.positionCaptured) {
          stats[key].titanPositionsCaptured += 1;
          fortificationWins[key].push(battle.fortificationId);
        } else {
          stats[otherKey].titanDefensesWon += 1;
        }
        if (battle.fortificationId === Fortification.BRIDGE_ID) {
          stats[key].bridgeAttacksUsed += 1;
        }
      }
    });

    const heroFortificationsCaptured = (positionsCaptured: { [key: number]: number }): Array<string> => {
      const fortsCaptured: Array<string> = [];
      if (positionsCaptured[Fortification.BARRACKS_ID] === 3) fortsCaptured.push('Barracks');
      if (positionsCaptured[Fortification.CITADEL_ID] === 7) fortsCaptured.push('Citadel');
      if (positionsCaptured[Fortification.FOUNDRY_ID] === 4) fortsCaptured.push('Foundry');
      if (positionsCaptured[Fortification.LIGHTHOUSE_ID] === 3) fortsCaptured.push('Lighthouse');
      if (positionsCaptured[Fortification.MAGE_ACADEMY_ID] === 3) fortsCaptured.push('Mage Academy');
      return fortsCaptured;
    };

    const titanFortificationsCaptured = (positionsCaptured: { [key: number]: number }): Array<string> => {
      const fortsCaptured: Array<string> = [];
      if (positionsCaptured[Fortification.BASTION_OF_FIRE_ID] === 4) fortsCaptured.push('Bastion of Fire');
      if (positionsCaptured[Fortification.BASTION_OF_ICE_ID] === 4) fortsCaptured.push('Bastion of Ice');
      if (positionsCaptured[Fortification.BRIDGE_ID] === 4) fortsCaptured.push('Bridge');
      if (positionsCaptured[Fortification.GATES_OF_NATURE_ID] === 4) fortsCaptured.push('Gates of Nature');
      if (positionsCaptured[Fortification.SPRING_OF_ELEMENTS_ID] === 4) fortsCaptured.push('Spring of Elements');
      return fortsCaptured;
    };

    const winsByFortIdThem = _.countBy(fortificationWins.them);
    const winsByFortIdUs = _.countBy(fortificationWins.us);
    stats.them.heroFortificationsCaptured = heroFortificationsCaptured(winsByFortIdThem);
    stats.them.titanFortificationsCaptured = titanFortificationsCaptured(winsByFortIdThem);
    stats.us.heroFortificationsCaptured = heroFortificationsCaptured(winsByFortIdUs);
    stats.us.titanFortificationsCaptured = titanFortificationsCaptured(winsByFortIdUs);
    setStats(stats);
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
                <li className="name">
                  <Link to={`/guilds/${assassinsGuild.id}`}>{assassinsGuild?.name}</Link>
                </li>
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
                <li className="name">
                  <Link to={`/guilds/${competitorGuild.id}`}>{competitorGuild?.name}</Link>
                </li>
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
          <div className="value-us more-info">
            <InfoBox
              content={
                <ul className="fortification-list">
                  {stats.us.heroFortificationsCaptured.length === 0 &&
                    stats.us.titanFortificationsCaptured.length === 0 && (
                      <li className="section-title">No forts captured.</li>
                    )}
                  {stats.us.heroFortificationsCaptured.length > 0 && (
                    <li className="section-title">Hero Fortifications:</li>
                  )}
                  {stats.us.heroFortificationsCaptured.map((name: string) => {
                    return <li key={name}>{name}</li>;
                  })}
                  {stats.us.heroFortificationsCaptured.length > 0 &&
                    stats.us.titanFortificationsCaptured.length > 0 && <li className="spacer"></li>}
                  {stats.us.titanFortificationsCaptured.length > 0 && (
                    <li className="section-title">Titan Fortifications:</li>
                  )}
                  {stats.us.titanFortificationsCaptured.map((name: string) => {
                    return <li key={name}>{name}</li>;
                  })}
                </ul>
              }
            >
              <span className="additional-data">
                (Hero: {stats.us.heroFortificationsCaptured.length} | Titan:{' '}
                {stats.us.titanFortificationsCaptured.length})
              </span>
              <span className="two-digit">
                {stats.us.heroFortificationsCaptured.length + stats.us.titanFortificationsCaptured.length}
              </span>
            </InfoBox>
          </div>
          <div className="name">fortifications captured</div>
          <div className="value-them more-info">
            <InfoBox
              content={
                <ul className="fortification-list">
                  {stats.them.heroFortificationsCaptured.length === 0 &&
                    stats.them.titanFortificationsCaptured.length === 0 && (
                      <li className="section-title">No forts captured.</li>
                    )}
                  {stats.them.heroFortificationsCaptured.length > 0 && (
                    <li className="section-title">Hero Fortifications:</li>
                  )}
                  {stats.them.heroFortificationsCaptured.map((name: string) => {
                    return <li key={name}>{name}</li>;
                  })}
                  {stats.them.heroFortificationsCaptured.length > 0 &&
                    stats.them.titanFortificationsCaptured.length > 0 && <li className="spacer"></li>}
                  {stats.them.titanFortificationsCaptured.length > 0 && (
                    <li className="section-title">Titan Fortifications:</li>
                  )}
                  {stats.them.titanFortificationsCaptured.map((name: string) => {
                    return <li key={name}>{name}</li>;
                  })}
                </ul>
              }
            >
              <span className="two-digit">
                {stats.them.heroFortificationsCaptured.length + stats.them.titanFortificationsCaptured.length}
              </span>
              <span className="additional-data">
                (Hero: {stats.them.heroFortificationsCaptured.length} | Titan:{' '}
                {stats.them.titanFortificationsCaptured.length})
              </span>
            </InfoBox>
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
          <div className="name">hero atk. power used</div>
          <div className="value-them">{stats.them.heroTotalAttackPower}</div>
        </li>
        <li className="stat">
          <div className="value-us">{stats.us.titanTotalAttackPower}</div>
          <div className="name">titan atk. power used</div>
          <div className="value-them">{stats.them.titanTotalAttackPower}</div>
        </li>
      </ul>
      {!_.isEmpty(children) && children}
    </div>
  );
};
export default WarView;
