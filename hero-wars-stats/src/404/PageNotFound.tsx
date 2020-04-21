import React from 'react';

import { RouteComponentProps } from 'react-router-dom';

const PageNotFound: React.FC<RouteComponentProps<{}, any>> = ({ location }) => {
  return <h1>{location.pathname} not found.</h1>;
};
export default PageNotFound;
