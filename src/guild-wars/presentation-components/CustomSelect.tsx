import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faCheck } from '@fortawesome/free-solid-svg-icons';

import './CustomSelect.scss';

export interface Option {
  display: string;
  id: number | string;
}

export interface CustomSelectProps {
  options: Array<Option>;
  selectedOption?: Option;
  onOptionUpdate: (selectedOption: Option) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = (props: CustomSelectProps) => {
  const { options, selectedOption, onOptionUpdate } = props;

  const [optionsVisible, setOptionsVisible] = useState(false);

  const mainContainerRef = React.createRef<HTMLDivElement>();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (
        optionsVisible &&
        event.target instanceof HTMLElement &&
        mainContainerRef.current &&
        !mainContainerRef.current.contains(event.target)
      ) {
        setOptionsVisible(false);
      }
    }
    window.addEventListener('mousedown', handleClickOutside);
    return (): void => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const optionSelected = (id: number | string): boolean => {
    return !selectedOption || id === selectedOption.id;
  };

  const updateSelection = (option: Option): void => {
    setOptionsVisible(false);
    if (!optionSelected(option.id)) {
      onOptionUpdate(option);
    }
  };

  return (
    <div className="custom-select font-small" ref={mainContainerRef}>
      <div className="current-selection" onClick={(): void => setOptionsVisible(!optionsVisible)}>
        {selectedOption?.display}
        {!optionsVisible && <FontAwesomeIcon icon={faAngleDown} className="affordance" />}
        {optionsVisible && <FontAwesomeIcon icon={faAngleUp} className="affordance" />}
      </div>
      <ul className={optionsVisible ? 'options visible' : 'options'}>
        {options.map((option, index) => {
          return (
            <li
              key={index}
              className={optionSelected(option.id) ? 'selected option' : 'option'}
              onClick={(): void => updateSelection(option)}
            >
              {option.display}
              {optionSelected(option.id) && <FontAwesomeIcon icon={faCheck} className="icon" />}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default CustomSelect;
