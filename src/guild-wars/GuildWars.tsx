import React, { useEffect, useState } from 'react';

import * as _ from 'lodash';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';

import BattlesTable from './presentation-components/BattlesTable';
import WarView from './presentation-components/WarView';

import { Battle } from '../models/battle';
import { Guild } from '../models/guild';
import { GuildWar } from '../models/guild-war';
import { Option } from './presentation-components/CustomSelect';

import './GuildWars.scss';
import BattlesView from './presentation-components/BattlesView';

export interface GuildWarsProps {
  guilds: Array<Guild>;
  wars: Array<GuildWar>;
}

const GuildWars: React.FC<GuildWarsProps> = (props: GuildWarsProps) => {
  const { guilds = [], wars = [] } = props;

  const [assassinsGuild, setAssassinsGuild] = useState<Guild>();

  const [displayedCompetitor, setDisplayedCompetitor] = useState<Guild>();
  const [displayedWar, setDisplayedWar] = useState<GuildWar>();
  const [displayedWarBattlesExpanded, setDisplayedWarBattlesExpanded] = useState(false);
  const [warOptions, setWarOptions] = useState<Array<Option>>([]);

  const [battlesOptions, setBattlesOptions] = useState<Array<Option>>([]);
  const [displayedBattles, setDisplayedBattles] = useState<Array<Battle>>([]);
  const [selectedBattleOption, setSelectedBattleOption] = useState<Option>();

  const ALL_BATTLES_OPTION = { display: 'All', id: 'ALL' };

  useEffect(() => {
    // we're number 1!
    setAssassinsGuild(_.find(guilds, (guild: Guild) => guild.id === 1));
  }, [guilds]);

  useEffect(() => {
    setBattlesOptions(buildBattlesOptions(wars));
    setDisplayedBattles(battlesFromWars(wars));
    setSelectedBattleOption(ALL_BATTLES_OPTION);
    // we assume the given data is sorted by war date already, so...
    const mostRecentWar = _.last(wars);
    if (mostRecentWar) {
      setWarOptions(buildWarOptions(wars));
      setDisplayedWar(mostRecentWar);
      const competitor = competitorFromWar(mostRecentWar);
      if (competitor) {
        setDisplayedCompetitor(competitor);
      }
    }
  }, [wars]);

  const buildBattlesOptions = (wars: Array<GuildWar>): Array<Option> => {
    const dupOptions = _.map(wars, (war: GuildWar) => {
      return { display: `War Week ${war.warWeek}`, id: `${war.warDateString.substring(0, 4)}${war.warWeek}` };
    });
    console.log(`dupOptions: ${JSON.stringify(dupOptions)}`);
    const options = _.uniqWith(dupOptions, _.isEqual);
    options.unshift(ALL_BATTLES_OPTION);
    console.log(`options: ${JSON.stringify(options)}`);
    return options;
  };

  const buildWarOptions = (wars: Array<GuildWar>): Array<Option> => {
    return _.map(wars, (war: GuildWar) => {
      return { display: `War Week ${war.warWeek} | ${war.warDay}  (${war.warDateString})`, id: war.id };
    });
  };

  const competitorFromWar = (war: GuildWar): Guild | undefined => {
    if (war) {
      // using known id check here instead of less brittle logic, b/c, you know, we can
      const competitorId = war.winningGuildId === 1 ? war.losingGuildId : war.winningGuildId;
      return _.find(guilds, (guild: Guild) => guild.id === competitorId);
    } else {
      return undefined;
    }
  };

  const updateDisplayedWar = (option: Option): void => {
    const war = _.find(wars, (war) => war.id === option.id);
    if (war) {
      setDisplayedWar(war);
      setDisplayedCompetitor(competitorFromWar(war));
    }
  };

  const updateDisplayedBattles = (option: Option): void => {
    setSelectedBattleOption(option);
    if (option.id === ALL_BATTLES_OPTION.id) {
      setDisplayedBattles(battlesFromWars(wars));
    } else {
      const filteredWars = _.filter(wars, (war) => war.warDateString === option.id);
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
    <section id="guild-wars-page">
      <div className="latest-war tile">
        {assassinsGuild && displayedCompetitor && displayedWar && (
          <WarView
            assassinsGuild={assassinsGuild}
            competitorGuild={displayedCompetitor}
            war={displayedWar}
            warOptions={warOptions}
            onWarUpdate={updateDisplayedWar}
          >
            <div
              className={
                displayedWarBattlesExpanded
                  ? 'battles-table-toggle font-subtitle expanded'
                  : 'battles-table-toggle font-subtitle'
              }
              onClick={(): void => setDisplayedWarBattlesExpanded(!displayedWarBattlesExpanded)}
            >
              Battles
              {!displayedWarBattlesExpanded && <FontAwesomeIcon icon={faCaretRight} className="affordance" />}
              {displayedWarBattlesExpanded && <FontAwesomeIcon icon={faCaretDown} className="affordance" />}
            </div>
            <div
              className={displayedWarBattlesExpanded ? 'battles-table-container visible' : 'battles-table-container'}
            >
              <BattlesTable battles={displayedWar.battles} guilds={guilds} />
            </div>
          </WarView>
        )}
      </div>
      <div className="all-battles tile">
        <BattlesView
          options={battlesOptions}
          selectedOption={selectedBattleOption}
          onUpdateSelectedWars={updateDisplayedBattles}
        >
          <BattlesTable battles={displayedBattles} guilds={guilds} />
        </BattlesView>
      </div>
    </section>
  );
};
export default GuildWars;
