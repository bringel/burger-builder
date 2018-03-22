import React from 'react';
import { css } from 'react-emotion';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems.js';

const drawer = css`
  position: fixed;
  width: 280px;
  max-width: 70%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 200;
  background-color: white;
  padding: 32px 16px;
  box-sizing: border-box;
  transition: transform 0.3s ease-out;

  @media (min-width: 500px) {
    display: none;
  }
`;

const open = css`
  transform: translateX(0);
`;

const close = css`
  transform: translateX(-100%);
`;

const sideDrawer = props => {
  return (
    <div className={drawer}>
      <div style={{ height: '11%', marginBottom: '32px' }}>
        <Logo />
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default sideDrawer;
