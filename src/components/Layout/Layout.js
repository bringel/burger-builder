import React from 'react';

import { css } from 'react-emotion';

const layout = props => {
  const content = css`
    margin-top: 16px;
  `;

  return (
    <React.Fragment>
      <div>Toolbar, menu, backdrop</div>
      <main className={content}>{props.children}</main>
    </React.Fragment>
  );
};

export default layout;
