import React, { useEffect, useState } from 'react';

import * as _ from 'lodash';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

import battleTypeImg from '../../data/misc-images/icon-battle.png';
import heroBattleTypeImg from '../../data/misc-images/arenaCoinKing2.png';
import titanBattleTypeImg from '../../data/misc-images/titan_potion.png';
import victoryPointIconImg from '../../data/misc-images/icon-victory-point.png';

import { Guild } from '../../models/guild';
import { Battle } from '../../models/battle';

import './BattlesTable.scss';

export interface BattlesTableProps {
  battles: Array<Battle>;
  guilds: Array<Guild>;
}

const SORT_ASC = 'asc';
const SORT_DESC = 'desc';

const COLUMN_ATTACKER = 'attacker';
const COLUMN_ATK_GUILD = 'atk-guild';
const COLUMN_ATK_POWER = 'atk-power';

const COLUMN_DEFENDER = 'defender';
const COLUMN_DEF_GUILD = 'def-guild';
const COLUMN_DEF_POWER = 'def-power';

const COLUMN_POWER_DIFFERENCE = 'power-difference';

const COLUMN_BATTLE_FORTIFICATION = 'battle-fortification';
const COLUMN_BATTLE_POSITION = 'battle-position';
const COLUMN_BATTLE_TYPE = 'battle-type';

const COLUMN_VICTORY_POINTS = 'victory-points';

const BattlesTable: React.FC<BattlesTableProps> = (props: BattlesTableProps) => {
  const { battles, guilds } = props;

  const [sortedBattles, setSortedBattles] = useState<Array<Battle>>([]);
  const [sortColumn, setSortColumn] = useState('');
  const [sortDirection, setSortDirection] = useState('');

  useEffect(() => {
    setSortedBattles(battles);
  }, [battles]);

  const sortedBy = (column: string, direction: string): boolean => {
    return column === sortColumn && direction === sortDirection;
  };

  const updateSort = (column: string): void => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === SORT_DESC ? SORT_ASC : SORT_DESC);
      const newSort = _.clone(sortedBattles);
      setSortedBattles(_.reverse(newSort));
    } else {
      setSortDirection(SORT_ASC);
      const newSort = _.clone(sortedBattles);
      setSortedBattles(
        _.sortBy(newSort, (battle) => {
          switch (column) {
            case COLUMN_ATTACKER:
              return battle.attacker.name;
            case COLUMN_ATK_POWER:
              return battle.attacker.power;
            case COLUMN_BATTLE_FORTIFICATION:
              return battle.fortification.name;
            case COLUMN_BATTLE_POSITION:
              return battle.position;
            case COLUMN_BATTLE_TYPE:
              return battle.fortification.type;
            case COLUMN_DEFENDER:
              return battle.defender.name;
            case COLUMN_DEF_POWER:
              return battle.defender.power;
            case COLUMN_POWER_DIFFERENCE:
              return battle.attacker.power - battle.defender.power;
            case COLUMN_VICTORY_POINTS:
              return battle.pointsEarned;
            default:
              return 0;
          }
        })
      );
    }
    setSortColumn(column);
  };

  const bannerImageForGuildId = (id: number): string => {
    const guild = _.find(guilds, (guild) => guild.id === id);
    return guild ? guild.bannerImagePath : '';
  };

  return (
    <div className="battles-table">
      <table>
        <thead className="table-header">
          <tr className="header-row">
            <th className="small-column attacker-grouping" onClick={(): void => updateSort(COLUMN_ATK_GUILD)}>
              <div></div>
              {sortedBy(COLUMN_ATK_GUILD, SORT_ASC) && <FontAwesomeIcon icon={faCaretDown} className="affordance" />}
              {sortedBy(COLUMN_ATK_GUILD, SORT_DESC) && <FontAwesomeIcon icon={faCaretUp} className="affordance" />}
            </th>
            <th className="large-column attacker-grouping" onClick={(): void => updateSort(COLUMN_ATTACKER)}>
              <div>Attacker</div>
              {sortedBy(COLUMN_ATTACKER, SORT_ASC) && <FontAwesomeIcon icon={faCaretDown} className="affordance" />}
              {sortedBy(COLUMN_ATTACKER, SORT_DESC) && <FontAwesomeIcon icon={faCaretUp} className="affordance" />}
            </th>
            <th className="medium-column attacker-grouping" onClick={(): void => updateSort(COLUMN_ATK_POWER)}>
              <div>Power</div>
              {sortedBy(COLUMN_ATK_POWER, SORT_ASC) && <FontAwesomeIcon icon={faCaretDown} className="affordance" />}
              {sortedBy(COLUMN_ATK_POWER, SORT_DESC) && <FontAwesomeIcon icon={faCaretUp} className="affordance" />}
            </th>
            <th className="small-column defender-grouping" onClick={(): void => updateSort(COLUMN_DEF_GUILD)}>
              <div></div>
              {sortedBy(COLUMN_DEF_GUILD, SORT_ASC) && <FontAwesomeIcon icon={faCaretDown} className="affordance" />}
              {sortedBy(COLUMN_DEF_GUILD, SORT_DESC) && <FontAwesomeIcon icon={faCaretUp} className="affordance" />}
            </th>
            <th className="large-column defender-grouping" onClick={(): void => updateSort(COLUMN_DEFENDER)}>
              <div>Defender</div>
              {sortedBy(COLUMN_DEFENDER, SORT_ASC) && <FontAwesomeIcon icon={faCaretDown} className="affordance" />}
              {sortedBy(COLUMN_DEFENDER, SORT_DESC) && <FontAwesomeIcon icon={faCaretUp} className="affordance" />}
            </th>
            <th className="medium-column defender-grouping" onClick={(): void => updateSort(COLUMN_DEF_POWER)}>
              <div>Power</div>
              {sortedBy(COLUMN_DEF_POWER, SORT_ASC) && <FontAwesomeIcon icon={faCaretDown} className="affordance" />}
              {sortedBy(COLUMN_DEF_POWER, SORT_DESC) && <FontAwesomeIcon icon={faCaretUp} className="affordance" />}
            </th>
            <th className="medium-column" onClick={(): void => updateSort(COLUMN_POWER_DIFFERENCE)}>
              <div>Pwr. Diff.</div>
              {sortedBy(COLUMN_POWER_DIFFERENCE, SORT_ASC) && (
                <FontAwesomeIcon icon={faCaretDown} className="affordance" />
              )}
              {sortedBy(COLUMN_POWER_DIFFERENCE, SORT_DESC) && (
                <FontAwesomeIcon icon={faCaretUp} className="affordance" />
              )}
            </th>
            <th className="small-column centered" onClick={(): void => updateSort(COLUMN_VICTORY_POINTS)}>
              <img src={victoryPointIconImg} alt="Victory Points earned" />
              {sortedBy(COLUMN_VICTORY_POINTS, SORT_ASC) && (
                <FontAwesomeIcon icon={faCaretDown} className="affordance" />
              )}
              {sortedBy(COLUMN_VICTORY_POINTS, SORT_DESC) && (
                <FontAwesomeIcon icon={faCaretUp} className="affordance" />
              )}
            </th>
            <th className="small-column centered" onClick={(): void => updateSort(COLUMN_BATTLE_TYPE)}>
              <img src={battleTypeImg} alt="Victory Points earned" />
              {sortedBy(COLUMN_BATTLE_TYPE, SORT_ASC) && <FontAwesomeIcon icon={faCaretDown} className="affordance" />}
              {sortedBy(COLUMN_BATTLE_TYPE, SORT_DESC) && <FontAwesomeIcon icon={faCaretUp} className="affordance" />}
            </th>
            <th className="large-column" onClick={(): void => updateSort(COLUMN_BATTLE_FORTIFICATION)}>
              <div>Fortification</div>
              {sortedBy(COLUMN_BATTLE_FORTIFICATION, SORT_ASC) && (
                <FontAwesomeIcon icon={faCaretDown} className="affordance" />
              )}
              {sortedBy(COLUMN_BATTLE_FORTIFICATION, SORT_DESC) && (
                <FontAwesomeIcon icon={faCaretUp} className="affordance" />
              )}
            </th>
          </tr>
        </thead>
        <tbody className="table-body">
          {sortedBattles.map((battle, index) => {
            return (
              <tr key={index} className="data-row">
                <td className="small-column">
                  <img
                    src={bannerImageForGuildId(battle.attacker.guildId)}
                    alt="Guild banner"
                    className="guild-banner"
                  />
                </td>
                <td className="large-column">
                  <div className="display-text">{battle.attacker.name}</div>
                </td>
                <td className="medium-column">
                  <div className="display-text">{battle.attacker.power}</div>
                </td>
                <td className="small-column">
                  <img
                    src={bannerImageForGuildId(battle.defender.guildId)}
                    alt="Guild banner"
                    className="guild-banner"
                  />
                </td>
                <td className="large-column">
                  <div className="display-text">{battle.defender.name}</div>
                </td>
                <td className="medium-column">
                  <div className="display-text">{battle.defender.power}</div>
                </td>
                <td className="medium-column">
                  <div className="display-text">{battle.attacker.power - battle.defender.power}</div>
                </td>
                <td className="small-column centered">
                  <div className="display-text">{battle.pointsEarned}</div>
                  {battle.positionCaptured && <FontAwesomeIcon icon={faCheck} className="affordance" />}
                </td>
                <td className="small-column centered">
                  {battle.fortification.isTitan() && <img src={titanBattleTypeImg} alt="Titan battle" />}
                  {battle.fortification.isHero() && <img src={heroBattleTypeImg} alt="Hero battle" />}
                </td>
                <td className="large-column">
                  <div className="display-text">{battle.fortification.name}</div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default BattlesTable;
