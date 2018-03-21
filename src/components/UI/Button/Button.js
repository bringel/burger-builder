import React from 'react';
import styled from 'react-emotion';

const Button = styled('button')`
  background-color: transparent;
  border: none;
  color: white;
  outline: none;
  cursor: pointer;
  font: inherit;
  padding: 10px;
  margin: 10px;
  font-weight: bold;

  &:first-of-type {
    margin-left: 0;
    padding-left: 0;
  }
`;

export const SuccessButton = styled(Button)`
  color: #5c9210;
`;

export const DangerButton = styled(Button)`
  color: #944317;
`;

export default Button;
