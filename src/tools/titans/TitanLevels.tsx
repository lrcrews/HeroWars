import React from 'react';

import { TITAN_LEVELS } from '../data/titan-levels';

import TitanGrowthCalculator from '../calculators/TitanGrowthCalculator';

const TitanLevels: React.FC = () => {
  const data = TITAN_LEVELS;

  let potionIncreasePerLevel = 10;

  return (
    <div>
      <TitanGrowthCalculator />
      <table className="tool-table">
        <thead>
          <tr>
            <th>Level</th>
            <th>Titan Potion</th>
            <th>Potion Increase</th>
            <th>Potion Total</th>
            <th>Emeralds</th>
            <th>Emerald Increase</th>
            <th>Emerald Total</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => {
            if (index === 0) {
              return (
                <tr key={row[0]}>
                  <td>{row[0]}</td>
                  <td>{row[1]}</td>
                  <td>-</td>
                  <td>{row[3]}</td>
                  <td>{row[4]}</td>
                  <td>-</td>
                  <td>{row[6]}</td>
                </tr>
              );
            } else if (index === data.length - 1) {
              return (
                <tr key={row[0]} className="totals-row">
                  <td>{row[0]}</td>
                  <td>{row[1]}</td>
                  <td>{row[2]}</td>
                  <td>{row[3]}</td>
                  <td>{row[4]}</td>
                  <td>{row[5]}</td>
                  <td>{row[6]}</td>
                </tr>
              );
            } else if (row[2] !== potionIncreasePerLevel) {
              const newIncrease = row[2];
              const increasePercent = (newIncrease - potionIncreasePerLevel) / potionIncreasePerLevel;
              potionIncreasePerLevel = newIncrease;
              return (
                <tr key={row[0]} className="emphasize-row">
                  <td>{row[0]}</td>
                  <td>
                    {row[1]} <span className="additional-data">(+{(increasePercent * 100).toFixed(0)}%)</span>
                  </td>
                  <td>{row[2]}</td>
                  <td>{row[3]}</td>
                  <td>{row[4]}</td>
                  <td>
                    {row[5]} <span className="additional-data">(+{(increasePercent * 100).toFixed(0)}%)</span>
                  </td>
                  <td>{row[6]}</td>
                </tr>
              );
            }
            return (
              <tr key={row[0]}>
                <td>{row[0]}</td>
                <td>{row[1]}</td>
                <td>{row[2]}</td>
                <td>{row[3]}</td>
                <td>{row[4]}</td>
                <td>{row[5]}</td>
                <td>{row[6]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="tool-data-source font-small">This section based on (TODO: link spreadsheet)</div>
    </div>
  );
};
export default TitanLevels;
