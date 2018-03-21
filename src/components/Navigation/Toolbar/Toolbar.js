import React from 'react';
import { css } from 'react-emotion';

import Logo from '../../Logo/Logo';

const toolbarWrapper = css`
  height: 56px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #703b09;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 90;

  & nav {
    height: 100%;
  }
`;

const toolbar = props => (
  <header className={toolbarWrapper}>
    <div>MENU</div>
    <Logo />
    <nav>...</nav>
  </header>
);

export default toolbar;
