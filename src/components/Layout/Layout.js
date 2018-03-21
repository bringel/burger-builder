import React from 'react';
import { css } from 'react-emotion';

import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = props => {
  const content = css`
    margin-top: 72px;
  `;

  return (
    <React.Fragment>
      <Toolbar />
      <div>Toolbar, menu, backdrop</div>
      <main className={content}>{props.children}</main>
    </React.Fragment>
  );
};

export default layout;
