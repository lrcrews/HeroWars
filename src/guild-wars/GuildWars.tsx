import React, { useEffect, useState } from 'react';

import * as _ from 'lodash';

import { useHistory } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';

import BattlesTable from './presentation-components/BattlesTable';
import WarView from './presentation-components/WarView';

import { Fortification } from '../models/fortification';
import { Guild } from '../models/guild';
import { GuildWar } from '../models/guild-war';
import { Option } from './presentation-components/CustomSelect';

import './GuildWars.scss';

export interface GuildWarsProps {
  fortifications: Array<Fortification>;
  guilds: Array<Guild>;
  selectedWarOption?: string | null;
  wars: Array<GuildWar>;
}

const GuildWars: React.FC<GuildWarsProps> = (props) => {
  const { fortifications = [], guilds = [], selectedWarOption, wars = [] } = props;

  const [assassinsGuild, setAssassinsGuild] = useState<Guild>();

  const [selectedOption, setSelectedOption] = useState<Option>();

  const [displayedCompetitor, setDisplayedCompetitor] = useState<Guild>();
  const [displayedWar, setDisplayedWar] = useState<GuildWar>();
  const [displayedWarBattlesExpanded, setDisplayedWarBattlesExpanded] = useState(true);
  const [warOptions, setWarOptions] = useState<Array<Option>>([]);

  const history = useHistory();

  useEffect(() => {
    // we're number 1!
    setAssassinsGuild(_.find(guilds, (guild: Guild) => guild.id === 1));
    // we assume the given data is sorted by war date already, so...
    const displayedWar = _.isNil(selectedWarOption)
      ? _.last(wars)
      : _.find(wars, (war) => war.warDateString === selectedWarOption);
    if (displayedWar) {
      const options = buildWarOptions(wars);
      setWarOptions(options);
      setSelectedOption(_.find(options, (option) => option.id === displayedWar.warDateString));
      setDisplayedWar(displayedWar);
      const competitor = competitorFromWar(displayedWar, guilds);
      if (competitor) {
        setDisplayedCompetitor(competitor);
      }
    }
  }, [guilds, selectedWarOption, wars]);

  const buildWarOptions = (wars: Array<GuildWar>): Array<Option> => {
    const options = _.map(wars, (war: GuildWar) => {
      return { display: `War Week ${war.warWeek} | ${war.warDay}  (${war.warDateString})`, id: war.warDateString };
    });
    return _.reverse(options);
  };

  const competitorFromWar = (war: GuildWar, warGuilds: Array<Guild>): Guild | undefined => {
    if (war) {
      // using known id check here instead of less brittle logic, b/c, you know, we can
      const competitorId = war.winningGuildId === 1 ? war.losingGuildId : war.winningGuildId;
      return _.find(warGuilds, (guild: Guild) => guild.id === competitorId);
    } else {
      return undefined;
    }
  };

  const updateDisplayedWar = (option: Option): void => {
    const war = _.find(wars, (war: GuildWar) => war.warDateString === option.id);
    if (war) {
      history.push(`/guild-wars?selectedWarOption=${option.id}`);
      setSelectedOption(option);
      setDisplayedWar(war);
      setDisplayedCompetitor(competitorFromWar(war, guilds));
    }
  };

  return (
    <section id="guild-wars-page">
      <div className="latest-war tile">
        {assassinsGuild && displayedCompetitor && displayedWar && selectedOption && (
          <WarView
            assassinsGuild={assassinsGuild}
            competitorGuild={displayedCompetitor}
            selectedOption={selectedOption}
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
              <BattlesTable battles={displayedWar.battles} fortifications={fortifications} guilds={guilds} />
            </div>
          </WarView>
        )}
      </div>
    </section>
  );
};
export default GuildWars;
