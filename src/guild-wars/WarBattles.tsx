import React, { useEffect, useState } from 'react';

import * as _ from 'lodash';

import BattlesTable from './presentation-components/BattlesTable';
import BattlesView from './presentation-components/BattlesView';

import { Battle } from '../models/battle';
import { Fortification } from '../models/fortification';
import { Guild } from '../models/guild';
import { GuildWar } from '../models/guild-war';
import { Option } from './presentation-components/CustomSelect';

import './WarBattles.scss';

export interface WarBattlesProps {
  fortifications: Array<Fortification>;
  guilds: Array<Guild>;
  wars: Array<GuildWar>;
}

const ALL_BATTLES_OPTION = { display: 'All', id: 'ALL' };

const WarBattles: React.FC<WarBattlesProps> = (props: WarBattlesProps) => {
  const { fortifications = [], guilds = [], wars = [] } = props;

  const [battlesOptions, setBattlesOptions] = useState<Array<Option>>([]);
  const [displayedBattles, setDisplayedBattles] = useState<Array<Battle>>([]);
  const [selectedBattleOption, setSelectedBattleOption] = useState<Option>();

  useEffect(() => {
    const options = buildBattlesOptions(wars);
    setBattlesOptions(options);
    setDisplayedBattles(battlesFromWars(wars));
    setSelectedBattleOption(_.last(options));
  }, [guilds, wars]);

  const buildBattlesOptions = (availableWars: Array<GuildWar>): Array<Option> => {
    const dupOptions = _.map(availableWars, (war: GuildWar) => {
      return { display: `War Week ${war.warWeek}`, id: `${war.warDateString.substring(0, 4)}${war.warWeek}` };
    });
    const options = _.uniqWith(dupOptions, _.isEqual);
    options.unshift(ALL_BATTLES_OPTION);
    return options;
  };

  const updateDisplayedBattles = (option: Option): void => {
    setSelectedBattleOption(option);
    if (option.id === ALL_BATTLES_OPTION.id) {
      setDisplayedBattles(battlesFromWars(wars));
    } else {
      const filteredWars = _.filter(wars, (war) => `${war.warDateString.substring(0, 4)}${war.warWeek}` === option.id);
      setDisplayedBattles(battlesFromWars(filteredWars));
    }
  };

  const battlesFromWars = (selectedWars: Array<GuildWar>): Array<Battle> => {
    return _.chain(selectedWars)
      .map((war) => war.battles)
      .flatten()
      .value();
  };

  return (
    <section id="guild-war-battles-page">
      <div className="war-battles tile">
        <BattlesView
          options={battlesOptions}
          selectedOption={selectedBattleOption}
          onUpdateSelectedWars={updateDisplayedBattles}
        >
          <BattlesTable battles={displayedBattles} fortifications={fortifications} guilds={guilds} />
        </BattlesView>
      </div>
    </section>
  );
};
export default WarBattles;
