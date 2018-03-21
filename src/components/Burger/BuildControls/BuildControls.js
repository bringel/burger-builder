import React from 'react';
import { css } from 'react-emotion';

import BuildControl from './BuildControl/BuildControl';

const buildControls = props => {
  const buildControls = css`
    width: 100%;
    background-color: #cf8f2e;
    display: flex;
    flex-flow: column;
    align-items: center;
    box-shadow: 0 2px 1px #ccc;
    margin: auto;
    padding: 10px 0;
  `;
  return <div className={buildControls} />;
};

export default buildControls;
