import React from 'react';
import { css } from 'react-emotion';

import Logo from '../../assets/images/burger-logo.png';

const logoWrapper = css`
  height: 80%;
  border-radius: 5px;
  background-color: white;
  padding: 8px;
  box-sizing: border-box;

  & img {
    height: 100%;
  }
`;

const logo = props => (
  <div className={logoWrapper}>
    <img src={Logo} />
  </div>
);

export default logo;
