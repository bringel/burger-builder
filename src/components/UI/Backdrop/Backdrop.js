import React from 'react';
import styled from 'react-emotion';

const BackdropDiv = styled('div')`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const backdrop = props =>
  props.show ? <BackdropDiv onClick={props.clicked} /> : null;

export default backdrop;
