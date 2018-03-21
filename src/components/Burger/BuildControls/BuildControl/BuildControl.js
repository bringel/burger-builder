import React from 'react';
import styled from 'react-emotion';

const buildControl = props => {
  const Wrapper = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0;
  `;

  const ControlButton = styled('button')`
    padding: 5px;
    margin: 0 5px;
    width: 80px;
    border: 1px solid #aa6817;
    cursor: pointer;
    outline: none;

    &:disabled {
      background-color: #ac9980;
      border: 1px solid #7e7365;
      color: #ccc;
      cursor: default;
    }

    &:hover:disabled {
      background-color: #ac9980;
      color: #ccc;
    }
  `;

  const Label = styled('div')`
    padding: 10px;
    font-weight: bold;
    width: 80px;
  `;

  const LessButton = styled(ControlButton)`
    background-color: #d39952;
    color: white;

    &:hover,
    &:active {
      background-color: #daa972;
      color: white;
    }
  `;

  const MoreButton = styled(ControlButton)`
    background-color: #8f5e1e;
    color: white;

    &:hover,
    &:active {
      background-color: 99703f;
      color: white;
    }
  `;

  return (
    <Wrapper>
      <Label>{props.label}</Label>
      <LessButton>Less</LessButton>
      <MoreButton>More</MoreButton>
    </Wrapper>
  );
};

export default buildControl;
