import React, { useEffect, useState } from 'react';

import * as _ from 'lodash';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';

import BattlesTable from './presentation-components/BattlesTable';
import WarHeader, { WarOption } from './presentation-components/WarHeader';

import { Battle } from '../models/battle';
import { Guild } from '../models/guild';
import { GuildWar } from '../models/guild-war';

import './GuildWars.scss';

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
  const [warOptions, setWarOptions] = useState<Array<WarOption>>([]);

  useEffect(() => {
    // we're number 1!
    setAssassinsGuild(_.find(guilds, (guild: Guild) => guild.id === 1));
  }, [guilds]);

  useEffect(() => {
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

  const buildWarOptions = (wars: Array<GuildWar>): Array<WarOption> => {
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

  const updateDisplayedWar = (warId: number): void => {
    setDisplayedWar(_.find(wars, (war) => war.id === warId));
  };

  const allBattles = (): Array<Battle> => {
    return _.chain(wars)
      .map((war) => war.battles)
      .flatten()
      .value();
  };

  return (
    <section id="guild-wars-page">
      <div className="latest-war tile">
        {assassinsGuild && displayedCompetitor && displayedWar && (
          <WarHeader
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
          </WarHeader>
        )}
      </div>
      <div className="all-battles tile">
        <div className="mini-title font-small">All Battles</div>
        <BattlesTable battles={allBattles()} guilds={guilds} />
      </div>
    </section>
  );
};
export default GuildWars;
