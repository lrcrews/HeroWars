import React, { useEffect, useState } from 'react';

import * as _ from 'lodash';

import { Link } from 'react-router-dom';

import { Fortification } from '../models/fortification';
import { Guild as GuildModel } from '../models/guild';
import { GuildWar } from '../models/guild-war';
import { Player } from '../models/player';

import './Guild.scss';

interface Champion extends Player {
  heroPower: number;
  titanPower: number;
}

interface GuildProps {
  allGuilds: Array<GuildModel>;
  selectedGuildId: number;
  wars: Array<GuildWar>;
}

const Guild: React.FC<GuildProps> = (props) => {
  const { allGuilds, selectedGuildId, wars } = props;

  const [selectedGuild, setSelectedGuild] = useState<GuildModel>();

  const [champions, setChampions] = useState<Array<Champion>>();
  const [recentWars, setRecentWars] = useState<Array<GuildWar>>();

  useEffect(() => {
    setSelectedGuild(_.find(allGuilds, (guild) => guild.id === selectedGuildId));
  }, [allGuilds, selectedGuildId]);

  useEffect(() => {
    if (selectedGuildId && wars) {
      const recentWars = _.chain(wars)
        .filter((war) => war.losingGuildId === selectedGuildId || war.winningGuildId === selectedGuildId)
        .orderBy((war) => war.warDateString)
        .reverse()
        .value();
      setRecentWars(recentWars.length > 5 ? recentWars.splice(0, 5) : recentWars);
    }
  }, [selectedGuildId, wars]);

  useEffect(() => {
    if (recentWars && recentWars.length > 0) {
      const champions: Array<Champion> = [];
      _.each(recentWars[0].battles, (battle) => {
        if (battle.defender.guildId === selectedGuildId) {
          const power = battle.defender.power;
          const existingChamp = _.find(champions, (champion) => champion.name === battle.defender.name);
          if (existingChamp) {
            Fortification.IS_HERO_FORT_ID(battle.fortificationId)
              ? (existingChamp.heroPower = power)
              : (existingChamp.titanPower = power);
          } else {
            const champion: Champion = _.merge(battle.defender, { heroPower: 0, titanPower: 0 });
            Fortification.IS_HERO_FORT_ID(battle.fortificationId)
              ? (champion.heroPower = power)
              : (champion.titanPower = power);
            champions.push(champion);
          }
        }
      });
      setChampions(
        _.chain(champions)
          .sortBy((champion) => champion.heroPower + champion.titanPower)
          .reverse()
          .value()
      );
    }
  }, [recentWars, selectedGuildId]);

  const bannerImageForGuildId = (id: number): string => {
    const guild = _.find(allGuilds, (guild) => guild.id === id);
    return guild ? guild.bannerImagePath : '';
  };

  const pointsInWarForGuild = (war: GuildWar, guildId: number): number => {
    return war.losingGuildId === guildId ? war.losingPointTotal : war.winningPointTotal;
  };

  if (selectedGuildId === 1) {
    return (
      <section id="guild-page">
        {selectedGuild && (
          <div className="guild-info tile">
            <section className="general-info">
              <div className="font-title name">{selectedGuild.name}</div>
              <img
                src={bannerImageForGuildId(selectedGuild.id)}
                alt={selectedGuild.name}
                title={selectedGuild.name}
                className="guild-banner"
              />
            </section>
            <section className="recent-wars">It's us, hooray us! (may do something here later)</section>
          </div>
        )}
      </section>
    );
  }

  return (
    <section id="guild-page">
      {selectedGuild && (
        <div className="guild-info tile">
          <section className="general-info">
            <div className="font-title name">{selectedGuild.name}</div>
            <img
              src={bannerImageForGuildId(selectedGuild.id)}
              alt={selectedGuild.name}
              title={selectedGuild.name}
              className="guild-banner"
            />
          </section>
          {recentWars && (
            <section className="recent-wars">
              <div className="font-subtitle table-title">Recent Wars</div>
              <table className="tool-table narrow">
                <thead>
                  <tr>
                    <th>War</th>
                    <th>
                      <img src={bannerImageForGuildId(1)} alt="Guild banner" className="guild-banner" />
                      <div>Points</div>
                    </th>
                    <th>
                      <img src={bannerImageForGuildId(selectedGuildId)} alt="Guild banner" className="guild-banner" />
                      <div>Points</div>
                    </th>
                    <th>Margin</th>
                    <th>WoW Change</th>
                  </tr>
                </thead>
                <tbody>
                  {recentWars.map((war, index) => {
                    const ourPoints = pointsInWarForGuild(war, 1);
                    const theirPoints = pointsInWarForGuild(war, selectedGuildId);
                    const margin = ourPoints - theirPoints;
                    let wowChange = 0;
                    if (index < recentWars.length - 1) {
                      const ourPreviousPoints = pointsInWarForGuild(recentWars[index + 1], 1);
                      const theirPreviousPoints = pointsInWarForGuild(recentWars[index + 1], selectedGuildId);
                      const previousMargin = ourPreviousPoints - theirPreviousPoints;
                      wowChange = margin - previousMargin;
                    }
                    return (
                      <tr key={war.warDateString}>
                        <td>
                          <Link to={`/guild-wars?selectedWarOption=${war.warDateString}`}>
                            <div className="display-text">{war.warDateString}</div>
                          </Link>
                        </td>
                        <td>{ourPoints}</td>
                        <td>{theirPoints}</td>
                        <td className={margin < 0 ? 'negative' : 'positive'}>{margin}</td>
                        <td className={wowChange < 0 ? 'bold negative' : 'bold positive'}>{wowChange}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </section>
          )}
        </div>
      )}
      {champions && (
        <div className="champion-info tile">
          <div className="font-subtitle table-title">Champions</div>
          <table className="tool-table">
            <thead>
              <tr>
                <th>Player</th>
                <th>Hero Power</th>
                <th>Titan Power</th>
              </tr>
            </thead>
            <tbody>
              {champions.map((champion, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <Link to={`/players/${champion.name}`}>
                        <div className="display-text">{champion.name}</div>
                      </Link>
                    </td>
                    <td>{champion.heroPower}</td>
                    <td>{champion.titanPower}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};
export default Guild;
