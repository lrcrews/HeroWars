import React, { useState } from 'react';

const data = [
  [2, 100, 0, 100, 20, 0, 20],
  [3, 110, 10, 210, 22, 2, 42],
  [4, 120, 10, 330, 24, 2, 66],
  [5, 130, 10, 460, 26, 2, 92],
  [6, 140, 10, 600, 28, 2, 120],
  [7, 150, 10, 750, 30, 2, 150],
  [8, 160, 10, 910, 32, 2, 182],
  [9, 170, 10, 1080, 34, 2, 216],
  [10, 180, 10, 1260, 36, 2, 252],
  [11, 190, 10, 1450, 38, 2, 290],
  [12, 200, 10, 1650, 40, 2, 330],
  [13, 210, 10, 1860, 42, 2, 372],
  [14, 220, 10, 2080, 44, 2, 416],
  [15, 230, 10, 2310, 46, 2, 462],
  [16, 240, 10, 2550, 48, 2, 510],
  [17, 250, 10, 2800, 50, 2, 560],
  [18, 260, 10, 3060, 52, 2, 612],
  [19, 270, 10, 3330, 54, 2, 666],
  [20, 280, 10, 3610, 56, 2, 722],
  [21, 290, 10, 3900, 58, 2, 780],
  [22, 300, 10, 4200, 60, 2, 840],
  [23, 310, 10, 4510, 62, 2, 902],
  [24, 320, 10, 4830, 64, 2, 966],
  [25, 330, 10, 5160, 66, 2, 1032],
  [26, 340, 10, 5500, 68, 2, 1100],
  [27, 350, 10, 5850, 70, 2, 1170],
  [28, 360, 10, 6210, 72, 2, 1242],
  [29, 370, 10, 6580, 74, 2, 1316],
  [30, 380, 10, 6960, 76, 2, 1392],
  [31, 390, 10, 7350, 78, 2, 1470],
  [32, 440, 50, 7790, 88, 10, 1558],
  [33, 490, 50, 8280, 98, 10, 1656],
  [34, 540, 50, 8820, 108, 10, 1764],
  [35, 590, 50, 9410, 118, 10, 1882],
  [36, 640, 50, 10050, 128, 10, 2010],
  [37, 690, 50, 10740, 138, 10, 2148],
  [38, 740, 50, 11480, 148, 10, 2296],
  [39, 790, 50, 12270, 158, 10, 2454],
  [40, 840, 50, 13110, 168, 10, 2622],
  [41, 890, 50, 14000, 178, 10, 2800],
  [42, 940, 50, 14940, 188, 10, 2988],
  [43, 990, 50, 15930, 198, 10, 3186],
  [44, 1040, 50, 16970, 208, 10, 3394],
  [45, 1090, 50, 18060, 218, 10, 3612],
  [46, 1140, 50, 19200, 228, 10, 3840],
  [47, 1190, 50, 20390, 238, 10, 4078],
  [48, 1240, 50, 21630, 248, 10, 4326],
  [49, 1290, 50, 22920, 258, 10, 4584],
  [50, 1340, 50, 24260, 268, 10, 4852],
  [51, 1390, 50, 25650, 278, 10, 5130],
  [52, 1490, 100, 27140, 298, 20, 5428],
  [53, 1590, 100, 28730, 318, 20, 5746],
  [54, 1690, 100, 30420, 338, 20, 6084],
  [55, 1790, 100, 32210, 358, 20, 6442],
  [56, 1890, 100, 34100, 378, 20, 6820],
  [57, 1990, 100, 36090, 398, 20, 7218],
  [58, 2090, 100, 38180, 418, 20, 7636],
  [59, 2190, 100, 40370, 438, 20, 8074],
  [60, 2290, 100, 42660, 458, 20, 8532],
  [61, 2390, 100, 45050, 478, 20, 9010],
  [62, 2490, 100, 47540, 498, 20, 9508],
  [63, 2590, 100, 50130, 518, 20, 10026],
  [64, 2690, 100, 52820, 538, 20, 10564],
  [65, 2790, 100, 55610, 558, 20, 11122],
  [66, 2890, 100, 58500, 578, 20, 11700],
  [67, 2990, 100, 61490, 598, 20, 12298],
  [68, 3090, 100, 64580, 618, 20, 12916],
  [69, 3190, 100, 67770, 638, 20, 13554],
  [70, 3290, 100, 71060, 658, 20, 14212],
  [71, 3390, 100, 74450, 678, 20, 14890],
  [72, 3590, 200, 78040, 718, 40, 15608],
  [73, 3790, 200, 81830, 758, 40, 16366],
  [74, 3990, 200, 85820, 798, 40, 17164],
  [75, 4190, 200, 90010, 838, 40, 18002],
  [76, 4390, 200, 94400, 878, 40, 18880],
  [77, 4590, 200, 98990, 918, 40, 19798],
  [78, 4790, 200, 103780, 958, 40, 20756],
  [79, 4990, 200, 108770, 998, 40, 21754],
  [80, 5190, 200, 113960, 1038, 40, 22792],
  [81, 5390, 200, 119350, 1078, 40, 23870],
  [82, 5590, 200, 124940, 1118, 40, 24988],
  [83, 5990, 400, 130930, 1198, 80, 26186],
  [84, 6390, 400, 137320, 1278, 80, 27464],
  [85, 6790, 400, 144110, 1358, 80, 28822],
  [86, 7190, 400, 151300, 1438, 80, 30260],
  [87, 7590, 400, 158890, 1518, 80, 31778],
  [88, 7990, 400, 166880, 1598, 80, 33376],
  [89, 8390, 400, 175270, 1678, 80, 35054],
  [90, 8790, 400, 184060, 1758, 80, 36812],
  [91, 9190, 400, 193250, 1838, 80, 38650],
  [92, 9590, 400, 202840, 1918, 80, 40568],
  [93, 9990, 400, 212830, 1998, 80, 42566],
  [94, 10390, 400, 223220, 2078, 80, 44644],
  [95, 10790, 400, 234010, 2158, 80, 46802],
  [96, 11190, 400, 245200, 2238, 80, 49040],
  [97, 11590, 400, 256790, 2318, 80, 51358],
  [98, 11990, 400, 268780, 2398, 80, 53756],
  [99, 12390, 400, 281170, 2478, 80, 56234],
  [100, 12790, 400, 293960, 2558, 80, 58792],
  [101, 13390, 600, 307350, 2678, 120, 61470],
  [102, 13990, 600, 321340, 2798, 120, 64268],
  [103, 14590, 600, 335930, 2918, 120, 67186],
  [104, 15190, 600, 351120, 3038, 120, 70224],
  [105, 15790, 600, 366910, 3158, 120, 73382],
  [106, 16390, 600, 383300, 3278, 120, 76660],
  [107, 16990, 600, 400290, 3398, 120, 80058],
  [108, 17590, 600, 417880, 3518, 120, 83576],
  [109, 18190, 600, 436070, 3638, 120, 87214],
  [110, 18790, 600, 454860, 3758, 120, 90972],
  [111, 19590, 800, 474450, 3918, 160, 94890],
  [112, 20390, 800, 494840, 4078, 160, 98968],
  [113, 21190, 800, 516030, 4238, 160, 103206],
  [114, 21990, 800, 538020, 4398, 160, 107604],
  [115, 22790, 800, 560810, 4558, 160, 112162],
  [116, 23590, 800, 584400, 4718, 160, 116880],
  [117, 24390, 800, 608790, 4878, 160, 121758],
  [118, 25190, 800, 633980, 5038, 160, 126796],
  [119, 25990, 800, 659970, 5198, 160, 131994],
  [120, 26790, 800, 686760, 5358, 160, 137352],
];

const TitanLevels: React.FC = () => {
  let potionIncreasePerLevel = 10;

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
    <div>
      <div className="tool-calculator font-large">
        To go from level <input type="text" onChange={updateValues}></input> to level 120 would take{' '}
        <span className="variable">{potionsRequired || '-'}</span> titan potions or{' '}
        <span className="variable">{emeraldsRequired || '-'}</span> emeralds.
      </div>
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
