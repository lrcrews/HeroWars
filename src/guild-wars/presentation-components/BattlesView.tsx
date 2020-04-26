import React, { PropsWithChildren, useState } from 'react';

import * as _ from 'lodash';

import CustomSelect, { Option } from './CustomSelect';

import './BattlesView.scss';

export interface BattlesViewProps extends PropsWithChildren<{}> {
  options: Array<Option>;
  selectedOption?: Option;
  onUpdateSelectedWars: (option: Option) => void;
}

const BattlesView: React.FC<BattlesViewProps> = (props: BattlesViewProps) => {
  const { children, options, selectedOption, onUpdateSelectedWars } = props;

  return (
    <div className="battles-view">
      <div className="wars-selection">
        <CustomSelect options={options} selectedOption={selectedOption} onOptionUpdate={onUpdateSelectedWars} />
      </div>
      {!_.isEmpty(children) && children}
    </div>
  );
};
export default BattlesView;
