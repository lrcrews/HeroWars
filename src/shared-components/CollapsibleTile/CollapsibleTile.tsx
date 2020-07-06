import React, { PropsWithChildren } from 'react';

import * as _ from 'lodash';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';

import './CollapsibleTile.scss';

export interface CollapsibleTileProps extends PropsWithChildren<{}> {
  expanded: boolean;
  title: string;
  onToggleExpanded: () => void;
}

const CollapsibleTile: React.FC<CollapsibleTileProps> = (props) => {
  const { children, expanded, title, onToggleExpanded } = props;

  return (
    <div className="collapsible-tile">
      <div
        className={expanded ? 'toggle font-subtitle expanded' : 'toggle font-subtitle'}
        tabIndex={0}
        onClick={onToggleExpanded}
        onKeyUp={(event): void | boolean => ['Enter', ' '].includes(event.key) && onToggleExpanded()}
      >
        {title}
        {!expanded && <FontAwesomeIcon icon={faCaretRight} className="affordance" />}
        {expanded && <FontAwesomeIcon icon={faCaretDown} className="affordance" />}
      </div>
      <div className={expanded ? 'content-container visible' : 'content-container'}>
        {!_.isEmpty(children) && children}
      </div>
    </div>
  );
};
export default CollapsibleTile;
