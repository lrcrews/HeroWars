import React, { useEffect, useState } from 'react';

import * as _ from 'lodash';

import { Battle } from '../models/battle';
import { Fortification } from '../models/fortification';
import { Guild } from '../models/guild';
import { GuildWar } from '../models/guild-war';
import { Player as PlayerModel } from '../models/player';
import { TimeSeriesEntry } from '../charts/time-series-entry';

import BattlesTable from '../guild-wars/presentation-components/BattlesTable';
import HeatChart from './HeatChart';
import TimeSeries from '../charts/TimeSeries';

import './Player.scss';

interface BattleStats {
  heroAttacksLost: number;
  heroAttacksTotal: number;
  heroAttacksWonCleanup: number;
  heroAttacksWonOutright: number;
  heroDefensesLostCleanup: number;
  heroDefensesLostOutright: number;
  heroDefensesTotal: number;
  heroDefensesWon: number;
  possibleAttacks: number;
  titanAttacksLost: number;
  titanAttacksTotal: number;
  titanAttacksWonCleanup: number;
  titanAttacksWonOutright: number;
  titanDefensesLostCleanup: number;
  titanDefensesLostOutright: number;
  titanDefensesTotal: number;
  titanDefensesWon: number;
  usedAttacks: number;
}

interface PlayerProps {
  fortifications: Array<Fortification>;
  guilds: Array<Guild>;
  name: string;
  wars: Array<GuildWar>;
}

const Player: React.FC<PlayerProps> = (props) => {
  const { fortifications, guilds, name, wars } = props;

  const [battles, setBattles] = useState<Array<Battle>>([]);
  const [mostRecentHeroPower, setMostRecentHeroPower] = useState<number>();
  const [mostRecentTitanPower, setMostRecentTitanPower] = useState<number>();
  const [warDates, setWarDates] = useState<Array<Date>>([]);

  const [playerGuild, setPlayerGuild] = useState<Guild>();

  const [stats, setStats] = useState<BattleStats>();

  const [heroPowerEntries, setHeroPowerEntries] = useState<Array<TimeSeriesEntry>>([]);
  const [titanPowerEntries, setTitanPowerEntries] = useState<Array<TimeSeriesEntry>>([]);

  const [heroHoverEntryValue, setHeroHoverEntryValue] = useState<number>();
  const [titanHoverEntryValue, setTitanHoverEntryValue] = useState<number>();

  useEffect(() => {
    const battles: Array<Array<Battle>> = [];
    const warDates: Array<Date> = [];
    const heroPowerEntries: Array<TimeSeriesEntry> = [];
    const titanPowerEntries: Array<TimeSeriesEntry> = [];
    _.each(wars, (war) => {
      if (war.losingGuildId !== Guild.NO_GUILD_ID) {
        const warBattles = _.chain(war.battles)
          .filter((battle) => battle.attacker.name === name || battle.defender.name === name)
          .sortBy((battle) => battle.datetimeString)
          .value();
        if (!_.isEmpty(warBattles)) {
          _.each(warBattles, (battle) => {
            const power = battle.attacker.name === name ? battle.attacker.power : battle.defender.power;
            const entry = new TimeSeriesEntry(new Date(battle.datetimeString), power);
            Fortification.IS_HERO_FORT_ID(battle.fortificationId)
              ? heroPowerEntries.push(entry)
              : titanPowerEntries.push(entry);
          });
          battles.push(warBattles);
          warDates.push(new Date(war.warDateString));
        }
      }
    });
    setBattles(_.flatten(battles));
    setHeroPowerEntries(heroPowerEntries);
    setTitanPowerEntries(titanPowerEntries);
    setWarDates(warDates);
  }, [name, wars]);

  useEffect(() => {
    // helper method
    const playerFromBattle = (battle: Battle): PlayerModel => {
      return battle.attacker.name === name ? battle.attacker : battle.defender;
    };
    // get most recent battles of each type (assumes battles sorted by `datetimeString`)
    const mostRecentHeroBattle = _.findLast(battles, (battle) => Fortification.IS_HERO_FORT_ID(battle.fortificationId));
    const mostRecentTitanBattle = _.findLast(battles, (battle) =>
      Fortification.IS_TITAN_FORT_ID(battle.fortificationId)
    );
    if (mostRecentHeroBattle) {
      setMostRecentHeroPower(playerFromBattle(mostRecentHeroBattle).power);
    }
    if (mostRecentTitanBattle) {
      setMostRecentTitanPower(playerFromBattle(mostRecentTitanBattle).power);
    }
    // set the player's guild
    const mostRecentBattle = mostRecentHeroBattle || mostRecentTitanBattle;
    if (mostRecentBattle) {
      setPlayerGuild(_.find(guilds, (guild) => guild.id === playerFromBattle(mostRecentBattle).guildId));
    }
    // set the player stats
    let heroAttacksLost = 0;
    let heroAttacksWonCleanup = 0;
    let heroAttacksWonOutright = 0;
    let heroDefensesLostCleanup = 0;
    let heroDefensesLostOutright = 0;
    let heroDefensesWon = 0;
    let titanAttacksLost = 0;
    let titanAttacksWonCleanup = 0;
    let titanAttacksWonOutright = 0;
    let titanDefensesLostCleanup = 0;
    let titanDefensesLostOutright = 0;
    let titanDefensesWon = 0;
    let usedAttacks = 0;
    _.each(battles, (battle) => {
      const heroBattle = Fortification.IS_HERO_FORT_ID(battle.fortificationId);
      const battleWon = battle.positionCaptured;
      if (battle.attacker.name === name) {
        usedAttacks += 1;
        if (heroBattle) {
          if (battleWon) {
            battle.pointsEarned === 20 ? (heroAttacksWonOutright += 1) : (heroAttacksWonCleanup += 1);
          } else {
            heroAttacksLost += 1;
          }
        } else {
          if (battleWon) {
            battle.pointsEarned === 20 ? (titanAttacksWonOutright += 1) : (titanAttacksWonCleanup += 1);
          } else {
            titanAttacksLost += 1;
          }
        }
      } else {
        if (heroBattle) {
          if (battleWon) {
            battle.pointsEarned === 20 ? (heroDefensesLostOutright += 1) : (heroDefensesLostCleanup += 1);
          } else {
            heroDefensesWon += 1;
          }
        } else {
          if (battleWon) {
            battle.pointsEarned === 20 ? (titanDefensesLostOutright += 1) : (titanDefensesLostCleanup += 1);
          } else {
            titanDefensesWon += 1;
          }
        }
      }
    });
    setStats({
      heroAttacksLost,
      heroAttacksTotal: heroAttacksLost + heroAttacksWonCleanup + heroAttacksWonOutright,
      heroAttacksWonCleanup,
      heroAttacksWonOutright,
      heroDefensesLostCleanup,
      heroDefensesLostOutright,
      heroDefensesTotal: heroDefensesLostCleanup + heroDefensesLostOutright + heroDefensesWon,
      heroDefensesWon,
      possibleAttacks: warDates.length * 2,
      titanAttacksLost,
      titanAttacksTotal: titanAttacksLost + titanAttacksWonCleanup + titanAttacksWonOutright,
      titanAttacksWonCleanup,
      titanAttacksWonOutright,
      titanDefensesLostCleanup,
      titanDefensesLostOutright,
      titanDefensesTotal: titanDefensesLostCleanup + titanDefensesLostOutright + titanDefensesWon,
      titanDefensesWon,
      usedAttacks,
    });
  }, [battles, fortifications, guilds, name, warDates]);

  const miaPercentage = (): string => {
    if (stats) {
      const missedAttacks = stats.possibleAttacks - stats.usedAttacks;
      return prettyPercent(missedAttacks / stats.possibleAttacks);
    }
    return '';
  };

  const prettyPercent = (value: number): string => {
    return `${(value * 100).toFixed(1)}%`;
  };

  const bannerImageForGuildId = (id: number): string => {
    const guild = _.find(guilds, (guild) => guild.id === id);
    return guild ? guild.bannerImagePath : '';
  };

  const mostRecentWar = (): string => {
    const date = _.chain(warDates)
      .sortBy((date) => date)
      .last()
      .value();
    return date ? date.toUTCString().substring(0, 11) : '-';
  };

  return (
    <section id="player-page">
      {playerGuild && warDates && (
        <div className="player-info tile">
          <section className="general-info">
            <div className="font-title name">{name}</div>
            <div className="font-small war-count">(data based on {warDates.length} wars)</div>
            <div className="font-small team-power">
              <span className="hero">Hero:</span>
              {mostRecentHeroPower} | <span className="titan">Titan:</span>
              {mostRecentTitanPower}
            </div>
          </section>
          <section className="guild-info">
            <img
              src={bannerImageForGuildId(playerGuild.id)}
              alt={playerGuild.name}
              title={playerGuild.name}
              className="guild-banner"
            />
          </section>
          <section className="graphs">
            <ul>
              <li>
                <div className="heat-chart-wrapper">
                  <div className="font-normal chart-title">War attack times:</div>
                  <HeatChart attacks={_.filter(battles, (battle) => battle.attacker.name === name)} />
                  <div className="font-normal axis-title">War Hour</div>
                </div>
              </li>
              <li>
                {stats && (
                  <div className="attacking-stats">
                    <div className="font-large missed-attacks">
                      <div className="emphasize value">
                        {stats.possibleAttacks - stats.usedAttacks}
                        <span className="font-normal helper">/{miaPercentage()}</span>
                      </div>
                      <div className="title">Missed Attacks</div>
                    </div>
                    <ul>
                      <li className="stats-container">
                        <div className="font-small-title">Hero</div>
                        {stats.heroAttacksTotal > 0 && (
                          <ul>
                            <li className="stat">
                              <div className="font-large emphasize value">{stats.heroAttacksTotal}</div>
                            </li>
                            <li className="stat">
                              <div className="font-large emphasize value">
                                <span className="font-small helper">
                                  {prettyPercent(stats.heroAttacksWonOutright / stats.heroAttacksTotal)}{' '}
                                </span>
                                {stats.heroAttacksWonOutright}
                              </div>
                            </li>
                            <li className="stat">
                              <div className="font-large emphasize value">
                                <span className="font-small helper">
                                  {prettyPercent(stats.heroAttacksLost / stats.heroAttacksTotal)}{' '}
                                </span>
                                {stats.heroAttacksLost}
                              </div>
                            </li>
                          </ul>
                        )}
                        {stats.heroAttacksTotal === 0 && (
                          <div className="font-normal empty-stats">No attacks found</div>
                        )}
                      </li>
                      <li className="stats-container titles">
                        <div className="spacer" />
                        <ul>
                          <li>
                            <div className="title">Attacks</div>
                          </li>
                          <li>
                            <div className="title">20pt Wins</div>
                          </li>
                          <li>
                            <div className="title">Losses</div>
                          </li>
                        </ul>
                      </li>
                      <li className="stats-container">
                        <div className="font-small-title">Titan</div>
                        {stats.titanAttacksTotal > 0 && (
                          <ul>
                            <li className="stat">
                              <div className="font-large emphasize value">{stats.titanAttacksTotal}</div>
                            </li>
                            <li className="stat">
                              <div className="font-large emphasize value">
                                {stats.titanAttacksWonOutright}
                                <span className="font-small helper">
                                  {' '}
                                  {prettyPercent(stats.titanAttacksWonOutright / stats.titanAttacksTotal)}
                                </span>
                              </div>
                            </li>
                            <li className="stat">
                              <div className="font-large emphasize value">
                                {stats.titanAttacksLost}
                                <span className="font-small helper">
                                  {' '}
                                  {prettyPercent(stats.titanAttacksLost / stats.titanAttacksTotal)}
                                </span>
                              </div>
                            </li>
                          </ul>
                        )}
                        {stats.titanAttacksTotal === 0 && (
                          <div className="font-normal empty-stats">No attacks found</div>
                        )}
                      </li>
                    </ul>
                  </div>
                )}
                <div className="most-recent-war">
                  <span className="font-small">Most recent war:</span> {mostRecentWar()}
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div className="graph-wrapper">
                  <TimeSeries
                    color="#ec0000"
                    graphName="hero-power"
                    orderedEntries={heroPowerEntries}
                    onHoverValueUpdated={setHeroHoverEntryValue}
                  />
                </div>
                <div className="graph-title">
                  Hero Power{heroHoverEntryValue && <span className="hero">{heroHoverEntryValue}</span>}
                </div>
              </li>
              <li>
                <div className="graph-wrapper">
                  <TimeSeries
                    color="#3283c7"
                    graphName="titan-power"
                    orderedEntries={titanPowerEntries}
                    onHoverValueUpdated={setTitanHoverEntryValue}
                  />
                </div>
                <div className="graph-title">
                  Titan Power{titanHoverEntryValue && <span className="titan">{titanHoverEntryValue}</span>}
                </div>
              </li>
            </ul>
          </section>
          {stats && (
            <section className="player-stats">
              <div className="font-subtitle">Defending - Hero</div>
              {stats.heroDefensesTotal > 0 && (
                <ul className="stats-container">
                  <li className="stat">
                    <div className="title">Total Defenses</div>
                    <div className="font-large value">{stats.heroDefensesTotal}</div>
                  </li>
                  <li className="stat">
                    <div className="title">Wins</div>
                    <div className="font-large value">
                      {stats.heroDefensesWon}
                      <span className="font-small helper">
                        /{prettyPercent(stats.heroDefensesWon / stats.heroDefensesTotal)}
                      </span>
                    </div>
                  </li>
                  <li className="stat">
                    <div className="title">20pt Losses</div>
                    <div className="font-large value">
                      {stats.heroDefensesLostOutright}
                      <span className="font-small helper">
                        /{prettyPercent(stats.heroDefensesLostOutright / stats.heroDefensesTotal)}
                      </span>
                    </div>
                  </li>
                  {/* <li className="stat">
                    <div className="title">Other Losses</div>
                    <div className="font-large value">
                      {stats.heroDefensesLostCleanup}
                      <span className="font-small helper">
                        /{prettyPercent(stats.heroDefensesLostCleanup / stats.heroDefensesTotal)}
                      </span>
                    </div>
                  </li> */}
                </ul>
              )}
              {stats.heroDefensesTotal === 0 && <div className="font-normal empty-stats">No hero defenses found.</div>}
              <div className="font-subtitle">Defending - Titan</div>
              {stats.titanDefensesTotal > 0 && (
                <ul className="stats-container">
                  <li className="stat">
                    <div className="title">Total Defenses</div>
                    <div className="font-large value">{stats.titanDefensesTotal}</div>
                  </li>
                  <li className="stat">
                    <div className="title">Wins</div>
                    <div className="font-large value">
                      {stats.titanDefensesWon}
                      <span className="font-small helper">
                        /{prettyPercent(stats.titanDefensesWon / stats.titanDefensesTotal)}
                      </span>
                    </div>
                  </li>
                  <li className="stat">
                    <div className="title">20pt Losses</div>
                    <div className="font-large value">
                      {stats.titanDefensesLostOutright}
                      <span className="font-small helper">
                        /{prettyPercent(stats.titanDefensesLostOutright / stats.titanDefensesTotal)}
                      </span>
                    </div>
                  </li>
                  {/* <li className="stat">
                    <div className="title">Other Losses</div>
                    <div className="font-large value">
                      {stats.titanDefensesLostCleanup}
                      <span className="font-small helper">
                        /{prettyPercent(stats.titanDefensesLostCleanup / stats.titanDefensesTotal)}
                      </span>
                    </div>
                  </li> */}
                </ul>
              )}
              {stats.titanDefensesTotal === 0 && (
                <div className="font-normal empty-stats">No titan defenses found.</div>
              )}
            </section>
          )}
        </div>
      )}
      <div className="tile">
        <BattlesTable battles={battles} fortifications={fortifications} guilds={guilds} reverseInitialSort={true} />
      </div>
    </section>
  );
};
export default Player;
