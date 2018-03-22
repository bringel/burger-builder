import React from 'react';
import { css } from 'react-emotion';

const menuIcon = css`
  width: 40px;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  box-sizing: border-box;
  cursor: pointer;

  & div {
    width: 90%;
    height: 3px;
    background-color: white;
  }

  @media (min-width: 500px) {
    display: none;
  }
`;

const drawerToggle = props => (
  <div className={menuIcon} onClick={props.clicked}>
    <div />
    <div />
    <div />
  </div>
);

export default drawerToggle;
