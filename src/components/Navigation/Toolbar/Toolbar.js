import React from 'react';
import { css } from 'react-emotion';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

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

const desktopOnly = css`
  @media (max-width: 499px) {
    display: none;
  }
`;

const toolbar = props => (
  <header className={toolbarWrapper}>
    <div>MENU</div>
    <div style={{ height: '80%' }} className={desktopOnly}>
      <Logo />
    </div>
    <nav className={desktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
