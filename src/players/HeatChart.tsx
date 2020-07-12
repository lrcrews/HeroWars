import React, { useEffect, useState } from 'react';

import * as _ from 'lodash';

import { Battle } from '../models/battle';

import './HeatChart.scss';

enum HourKey {
  Hour0 = 'hour0',
  Hour1 = 'hour1',
  Hour2 = 'hour2',
  Hour3 = 'hour3',
  Hour4 = 'hour4',
  Hour5 = 'hour5',
  Hour6 = 'hour6',
  Hour7 = 'hour7',
  Hour8 = 'hour8',
  Hour9 = 'hour9',
  Hour10 = 'hour10',
  Hour11 = 'hour11',
  Hour12 = 'hour12',
}

interface HeatChartProps {
  attacks: Array<Battle>;
}

const HeatChart: React.FC<HeatChartProps> = (props) => {
  const { attacks = [] } = props;

  const totalAttacks = attacks.length;

  const [attackTimeHash, setAttackTimeHash] = useState<{ [key: string]: { [key: string]: number } }>({});

  useEffect(() => {
    const attackTimeHash = {
      hour0: {
        quarter1: 0,
        quarter2: 0,
        quarter3: 0,
        quarter4: 0,
      },
      hour1: {
        quarter1: 0,
        quarter2: 0,
        quarter3: 0,
        quarter4: 0,
      },
      hour2: {
        quarter1: 0,
        quarter2: 0,
        quarter3: 0,
        quarter4: 0,
      },
      hour3: {
        quarter1: 0,
        quarter2: 0,
        quarter3: 0,
        quarter4: 0,
      },
      hour4: {
        quarter1: 0,
        quarter2: 0,
        quarter3: 0,
        quarter4: 0,
      },
      hour5: {
        quarter1: 0,
        quarter2: 0,
        quarter3: 0,
        quarter4: 0,
      },
      hour6: {
        quarter1: 0,
        quarter2: 0,
        quarter3: 0,
        quarter4: 0,
      },
      hour7: {
        quarter1: 0,
        quarter2: 0,
        quarter3: 0,
        quarter4: 0,
      },
      hour8: {
        quarter1: 0,
        quarter2: 0,
        quarter3: 0,
        quarter4: 0,
      },
      hour9: {
        quarter1: 0,
        quarter2: 0,
        quarter3: 0,
        quarter4: 0,
      },
      hour10: {
        quarter1: 0,
        quarter2: 0,
        quarter3: 0,
        quarter4: 0,
      },
      hour11: {
        quarter1: 0,
        quarter2: 0,
        quarter3: 0,
        quarter4: 0,
      },
      hour12: {
        quarter1: 0,
        quarter2: 0,
        quarter3: 0,
        quarter4: 0,
      },
    };
    const hourKeyFromAttackHour = (hour: number): HourKey | undefined => {
      switch (hour) {
        case 0:
          return HourKey.Hour0;
        case 1:
          return HourKey.Hour1;
        case 2:
          return HourKey.Hour2;
        case 3:
          return HourKey.Hour3;
        case 4:
          return HourKey.Hour4;
        case 5:
          return HourKey.Hour5;
        case 6:
          return HourKey.Hour6;
        case 7:
          return HourKey.Hour7;
        case 8:
          return HourKey.Hour8;
        case 9:
          return HourKey.Hour9;
        case 10:
          return HourKey.Hour10;
        case 11:
          return HourKey.Hour11;
        case 12:
          return HourKey.Hour12;
        default:
          return undefined;
      }
    };
    _.each(attacks, (battle) => {
      // battle.datetimeString looks like: 2020-07-09T12:46:31
      const attackHour = Number.parseInt(battle.datetimeString.substring(11, 13));
      const attackMin = Number.parseInt(battle.datetimeString.substring(14, 16));
      const hourKey = hourKeyFromAttackHour(attackHour);
      if (hourKey && attackMin) {
        if (attackMin < 15) {
          attackTimeHash[hourKey].quarter1 += 1;
        } else if (attackMin < 30) {
          attackTimeHash[hourKey].quarter2 += 1;
        } else if (attackMin < 45) {
          attackTimeHash[hourKey].quarter3 += 1;
        } else {
          attackTimeHash[hourKey].quarter4 += 1;
        }
      }
    });
    setAttackTimeHash(attackTimeHash);
  }, [attacks]);

  const classFromCount = (count: number): string => {
    if (count === 0) return 'cell no-activity';
    const percent = count / totalAttacks;
    if (percent < 0.1) {
      return 'cell activity-0-10';
    } else if (percent < 0.25) {
      return 'cell activity-10-25';
    } else if (percent < 0.5) {
      return 'cell activity-25-50';
    } else if (percent < 0.75) {
      return 'cell activity-50-75';
    } else if (percent < 0.9) {
      return 'cell activity-75-90';
    } else {
      return 'cell activity-90-100';
    }
  };

  return (
    <div className="heat-chart">
      <ul className="legend font-small">
        <li>
          <div className="key no-activity"></div>
          <div className="title">0%</div>
        </li>
        <li>
          <div className="key activity-0-10"></div>
          <div className="title">{'<'}10%</div>
        </li>
        <li>
          <div className="key activity-10-25"></div>
          <div className="title">10-25%</div>
        </li>
        <li>
          <div className="key activity-25-50"></div>
          <div className="title">25-50%</div>
        </li>
        <li>
          <div className="key activity-50-75"></div>
          <div className="title">50-75%</div>
        </li>
        <li>
          <div className="key activity-75-90"></div>
          <div className="title">75-90%</div>
        </li>
        <li>
          <div className="key activity-90-100"></div>
          <div className="title">90%+</div>
        </li>
      </ul>
      {Object.keys(attackTimeHash).map((key, index) => {
        return (
          <div key={key} className="hour-container">
            <div className={classFromCount(attackTimeHash[key].quarter1)}></div>
            <div className={classFromCount(attackTimeHash[key].quarter2)}></div>
            <div className={classFromCount(attackTimeHash[key].quarter3)}></div>
            <div className={classFromCount(attackTimeHash[key].quarter4)}></div>
            <div className="column-label">{index + 1}</div>
          </div>
        );
      })}
    </div>
  );
};
export default HeatChart;
