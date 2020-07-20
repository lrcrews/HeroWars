import React, { useState } from 'react';

import * as _ from 'lodash';

import CollapsibleTile from '../../shared-components/CollapsibleTile/CollapsibleTile';
import DungeonStrategy from './DungeonStrategy';
import TitaniteRequirement from './TitaniteRequirement';
import TitanLevels from './TitanLevels';
import TitanStarRank from './TitanStarRank';
import WarStrategy from './WarStrategy';

const SECTION_DUNGEON_STRATEGY = 'dungeon_strategy';
const SECTION_LEVEL = 'titan_level';
const SECTION_STAR_RANK = 'titan_star_rank';
const SECTION_TITANITE_REQUIREMENT = 'titanite_requirement';
const SECTION_WAR_STRATEGY = 'war_strategy';

const Titans: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    [SECTION_DUNGEON_STRATEGY]: false,
    [SECTION_LEVEL]: false,
    [SECTION_STAR_RANK]: false,
    [SECTION_TITANITE_REQUIREMENT]: false,
  });

  const updateExpandedSections = (sectionName: string): void => {
    const updatedValues = _.clone(expandedSections);
    const currentValue = expandedSections[sectionName] || false;
    updatedValues[sectionName] = !currentValue;
    setExpandedSections(updatedValues);
  };

  return (
    <main id="titan-levels-page">
      <div className="tile">
        <div className="font-title">Titans Info</div>
        <div className="font-normal">Each expandable section contains tools, tables, and/or posts about titans.</div>
      </div>
      <CollapsibleTile
        expanded={expandedSections[SECTION_TITANITE_REQUIREMENT]}
        title="Titanite Requirement"
        onToggleExpanded={(): void => updateExpandedSections(SECTION_TITANITE_REQUIREMENT)}
      >
        <TitaniteRequirement />
      </CollapsibleTile>
      <CollapsibleTile
        expanded={expandedSections[SECTION_DUNGEON_STRATEGY]}
        title="Dungeon Strategy"
        onToggleExpanded={(): void => updateExpandedSections(SECTION_DUNGEON_STRATEGY)}
      >
        <DungeonStrategy />
      </CollapsibleTile>
      <CollapsibleTile
        expanded={expandedSections[SECTION_WAR_STRATEGY]}
        title="War Strategy"
        onToggleExpanded={(): void => updateExpandedSections(SECTION_WAR_STRATEGY)}
      >
        <WarStrategy />
      </CollapsibleTile>
      <CollapsibleTile
        expanded={expandedSections[SECTION_STAR_RANK]}
        title="Titan Star Rank"
        onToggleExpanded={(): void => updateExpandedSections(SECTION_STAR_RANK)}
      >
        <TitanStarRank />
      </CollapsibleTile>
      <CollapsibleTile
        expanded={expandedSections[SECTION_LEVEL]}
        title="Titan Levels"
        onToggleExpanded={(): void => updateExpandedSections(SECTION_LEVEL)}
      >
        <TitanLevels />
      </CollapsibleTile>
    </main>
  );
};
export default Titans;
