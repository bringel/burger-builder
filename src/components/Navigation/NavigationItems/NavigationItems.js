import React from 'react';
import styled from 'react-emotion';

import NavigationItem from './NavigationItem/NavigationItem';

const NavList = styled('ul')`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-flow: column;
  align-items: center;
  height: 100%;

  @media (min-width: 500px) {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-flow: row;
    align-items: center;
    height: 100%;
  }
`;
const navigationItems = props => (
  <NavList>
    <NavigationItem link="/" active>
      Burger Builder
    </NavigationItem>
    <NavigationItem link="/">Checkout</NavigationItem>
  </NavList>
);

export default navigationItems;
