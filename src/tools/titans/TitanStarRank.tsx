import React from 'react';

const TitanStarRank: React.FC = () => {
  return (
    <div>
      <table className="tool-table">
        <thead>
          <tr>
            <th>Star</th>
            <th>Gold Cost</th>
            <th>Sparks % Boost</th>
            <th>
              Soulstones <span className="additional-data">(Super)</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1*</td>
            <td>-</td>
            <td>-</td>
            <td>
              30 <span className="additional-data">(-)</span>
            </td>
          </tr>
          <tr>
            <td>2*</td>
            <td>75,000</td>
            <td>~45%</td>
            <td>
              50 <span className="additional-data">(-)</span>
            </td>
          </tr>
          <tr>
            <td>3*</td>
            <td>300,000</td>
            <td>~37%</td>
            <td>
              150 <span className="additional-data">(250)</span>
            </td>
          </tr>
          <tr>
            <td>4*</td>
            <td>750,000</td>
            <td>~34%</td>
            <td>
              500 <span className="additional-data">(500)</span>
            </td>
          </tr>
          <tr>
            <td>5*</td>
            <td>1,250,000</td>
            <td>?</td>
            <td>
              900 <span className="additional-data">(900)</span>
            </td>
          </tr>
          <tr>
            <td>6*</td>
            <td>2,500,000</td>
            <td>~20%</td>
            <td>
              1500 <span className="additional-data">(1500)</span>
            </td>
          </tr>
          <tr className="totals-row">
            <td></td>
            <td>4,875,000</td>
            <td>-</td>
            <td>
              3130 <span className="additional-data">(3150)</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="tool-data-source font-small">This section based on (TODO: link spreadsheet)</div>
    </div>
  );
};
export default TitanStarRank;
