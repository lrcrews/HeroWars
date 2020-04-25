import React, { useEffect, useState } from 'react';

import * as _ from 'lodash';

import WarHeader from './presentation-components/WarHeader';

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

  const [latestCompetitor, setLatestCompetitor] = useState<Guild>();
  const [latestWar, setLatestWar] = useState<GuildWar>();

  useEffect(() => {
    // we're number 1!
    setAssassinsGuild(_.find(guilds, (guild: Guild) => guild.id === 1));
  }, [guilds]);

  useEffect(() => {
    // we assume the given data is sorted by war date already, so...
    const mostRecentWar = _.last(wars);
    if (mostRecentWar) {
      setLatestWar(mostRecentWar);
      const competitor = competitorFromWar(mostRecentWar);
      if (competitor) {
        setLatestCompetitor(competitor);
      }
    }
  }, [wars]);

  const competitorFromWar = (war: GuildWar): Guild | undefined => {
    if (war) {
      // using known id check here instead of less brittle logic, b/c, you know, we can
      const competitorId = war.winningGuildId === 1 ? war.losingGuildId : war.winningGuildId;
      return _.find(guilds, (guild: Guild) => guild.id === competitorId);
    } else {
      return undefined;
    }
  };

  return (
    <section id="guild-wars-page">
      <div className="latest-war tile">
        {assassinsGuild && latestCompetitor && latestWar && (
          <WarHeader assassinsGuild={assassinsGuild} competitorGuild={latestCompetitor} war={latestWar} />
        )}
      </div>
    </section>
  );
};
export default GuildWars;
