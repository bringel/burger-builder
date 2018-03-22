import React from 'react';
import styled from 'react-emotion';

const NavLi = styled('li')`
  margin: 10px 0;
  box-sizing: border-box;
  display: block;
  width: 100%;

  & a {
    color: #8f5c2c;
    text-decoration: none;
    width: 100%;
    box-sizing: border-box;
    display: block;
  }

  & a:hover,
  a:active,
  a.active {
    color: #40a4c8;
  }

  @media (min-width: 500px) {
    margin: 0;
    display: flex;
    align-items: center;
    height: 100%;
    width: auto;

    & a {
      color: white;
      height: 100%;
      padding: 16px 10px;
      border-bottom: 4px solid transparent;
    }

    & a:hover,
    a:active,
    a.active {
      background-color: #8f5c2c;
      border-bottom-color: #40a4c8;
      color: white;
    }
  }
`;

const navigationItem = props => (
  <NavLi>
    <a href={props.link} className={props.active ? 'active' : null}>
      {props.children}
    </a>
  </NavLi>
);

export default navigationItem;
