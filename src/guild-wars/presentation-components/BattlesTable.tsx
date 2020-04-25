import React, { useEffect, useState } from 'react';

import * as _ from 'lodash';

import victoryPointIconImg from '../../data/misc-images/icon-victory-point.png';

import { Guild } from '../../models/guild';
import { Battle } from '../../models/battle';

import './BattlesTable.scss';

export interface BattlesTableProps {
  battles: Array<Battle>;
  guilds: Array<Guild>;
}

const BattlesTable: React.FC<BattlesTableProps> = (props: BattlesTableProps) => {
  const { battles, guilds } = props;

  return (
    <div className="battles-table">
      <table className="table">
        <thead>
          <tr>
            <th>Attacker</th>
            <th>Atk. Power</th>
            <th>Defender</th>
            <th>Def. Power</th>
            <th>
              <img src={victoryPointIconImg} alt="Victory Points earned" />
            </th>
          </tr>
        </thead>
        <tbody>
          {battles.map((battle, index) => {
            return (
              <tr key={index}>
                <td>{battle.attacker.name}</td>
                <td>{battle.attacker.power}</td>
                <td>{battle.defender.name}</td>
                <td>{battle.defender.power}</td>
                <td>{battle.pointsEarned}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default BattlesTable;
