import React from 'react';

const TitaniteRequirement: React.FC = () => {
  return (
    <div>
      <p className="font-large">
        In a perfect situation all 30 members will get 150 titanite a day, for a total of 4500 (max reward tier). This
        is accomplished by:
      </p>
      <ul>
        <li>- 30 titanite from the first 10 levels starting from your daily reset checkpoint</li>
        <li>- 60 for the next 10 levels, reaching the next checkpoint</li>
        <li>- 60 for the next 10 levels, reaching an additional checkpoint</li>
      </ul>
      <p>In reality this will rarely happen.</p>
      <p className="font-large">Instead you should strive to hit one of the following:</p>
      <ul>
        <li>
          - <span className="emphasize">As much as you can if less than 151</span>
        </li>
        <li>
          - <span className="emphasize">151</span> (normal flow plus 1 battle, will be 152 the first time you do this)
        </li>
        <li>
          - <span className="emphasize">158</span> (normal flow plus 4 battles (1 extra titan battle), will be 166 the
          first time you do this)
        </li>
        <li>
          - <span className="emphasize">163</span> (normal flow plus 5 battles (2 extra titan battles), will be 176 the
          first time you do this)
        </li>
      </ul>
      <div className="tool-data-source font-small">This section based on Assassins discord</div>
    </div>
  );
};
export default TitaniteRequirement;
