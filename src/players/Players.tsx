import React, { useEffect, useState } from 'react';

import * as _ from 'lodash';

import { Link } from 'react-router-dom';

import { GuildWar } from '../models/guild-war';

// import './Players.scss';

interface PlayersProps {
  wars: Array<GuildWar>;
}

const Players: React.FC<PlayersProps> = (props) => {
  const { wars } = props;

  const [knownPlayersHash, setKnownPlayersHash] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    if (!_.isEmpty(wars)) {
      const knownPlayers: { [key: string]: number } = {};
      _.each(wars, (war) => {
        _.each(war.battles, (battle) => {
          const attacker = battle.attacker.name;
          const defender = battle.defender.name;
          knownPlayers[attacker] ? (knownPlayers[attacker] += 1) : (knownPlayers[attacker] = 1);
          knownPlayers[defender] ? (knownPlayers[defender] += 1) : (knownPlayers[defender] = 1);
        });
      });
      setKnownPlayersHash(knownPlayers);
    }
  }, [wars]);

  return (
    <section id="players-index-page">
      <div className="tile">
        <div className="font-subtitle table-title">Known Players</div>
        <table className="tool-table narrow">
          <thead>
            <tr>
              <th>Player</th>
              <th>Battles</th>
            </tr>
          </thead>
          <tbody>
            {_.sortBy(Object.keys(knownPlayersHash), (key) => key.toUpperCase()).map((name) => {
              return (
                <tr key={name}>
                  <td>
                    <Link to={`/players/${name}`}>
                      <div className="display-text">{name}</div>
                    </Link>
                  </td>
                  <td>{knownPlayersHash[name]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};
export default Players;
