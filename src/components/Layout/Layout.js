import React from 'react';
import { css } from 'react-emotion';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = props => {
  const content = css`
    margin-top: 72px;
  `;

  return (
    <React.Fragment>
      <Toolbar />
      <SideDrawer />
      <div>Toolbar, menu, backdrop</div>
      <main className={content}>{props.children}</main>
    </React.Fragment>
  );
};

export default layout;
