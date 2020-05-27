import React, { PropsWithChildren, ReactNode } from 'react';

import './InfoBox.scss';

export interface InfoBoxProps extends PropsWithChildren<{}> {
  content: ReactNode;
}

const InfoBox: React.FC<InfoBoxProps> = (props: InfoBoxProps) => {
  const { children, content } = props;

  return (
    <div className="info-box">
      <div className="child-content">{children}</div>
      <div className="info-content">{content}</div>
    </div>
  );
};
export default InfoBox;
