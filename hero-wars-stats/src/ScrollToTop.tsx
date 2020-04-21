import React from 'react';

import { RouteComponentProps, withRouter } from 'react-router-dom';

const ScrollToTop: React.FC<RouteComponentProps<any>> = ({ children, location: { pathname } }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return children as React.ReactElement;
};
export default withRouter(ScrollToTop);
