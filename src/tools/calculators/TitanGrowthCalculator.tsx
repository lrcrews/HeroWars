import React, { useState } from 'react';

import { TITAN_LEVELS } from '../data/titan-levels';

const TitanGrowthCalculator: React.FC = () => {
  const data = TITAN_LEVELS;

  const [emeraldsRequired, setEmeraldsRequired] = useState<number>();
  const [potionsRequired, setPotionsRequired] = useState<number>();

  const updateValues = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const currentLevel = Number.parseInt(event.target.value) || -1;
    if (currentLevel > 1 && currentLevel < data[data.length - 1][0]) {
      const currentEmeralds = data[currentLevel - 2][6];
      const totalEmeraldsRequired = data[data.length - 1][6];
      setEmeraldsRequired(totalEmeraldsRequired - currentEmeralds);
      const currentPotions = data[currentLevel - 2][3];
      const totalPotionsRequired = data[data.length - 1][3];
      setPotionsRequired(totalPotionsRequired - currentPotions);
    } else {
      setEmeraldsRequired(undefined);
      setPotionsRequired(undefined);
    }
  };

  return (
    <div className="tool-calculator font-large">
      To go from level <input type="text" onChange={updateValues}></input> to level 120 would take{' '}
      <span className="variable">{potionsRequired || '-'}</span> titan potions or{' '}
      <span className="variable">{emeraldsRequired || '-'}</span> emeralds.
    </div>
  );
};
export default TitanGrowthCalculator;
