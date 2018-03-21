import React from 'react';
import styled, { css } from 'react-emotion';

import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const buildControls = props => {
  const buildControls = css`
    width: 100%;
    background-color: #cf8f2e;
    display: flex;
    flex-flow: column;
    align-items: center;
    box-shadow: 0 2px 1px #ccc;
    margin: auto;
    padding: 10px 0;
  `;

  const OrderButton = styled('button')`
    background-color: #dad735;
    outline: none;
    cursor: pointer;
    border: 1px solid #966909;
    color: #966909;
    font-family: inherit;
    font-size: 1.2em;
    padding: 15px 30px;
    box-shadow: 2px 2px 2px #966909;

    &:hover,
    &:active {
      background-color: #a0db41;
      border: 1px solid #966909;
      color: #966909;
    }

    &:disabled {
      background-color: #c7c6c6;
      cursor: not-allowed;
      border: 1px solid #ccc;
      color: #888888;
    }

    &:not(:disabled) {
      animation: enable 0.3s linear;
    }

    @keyframes enable {
      0% {
        transform: scale(1);
      }
      60% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
      }
    }
  `;
  return (
    <div className={buildControls}>
      <p>
        Price: <strong>${props.price.toFixed(2)}</strong>
      </p>
      {controls.map(c => (
        <BuildControl
          key={c.label}
          label={c.label}
          add={() => props.add(c.type)}
          remove={() => props.remove(c.type)}
          removeDisabled={props.ingredients[c.type] === 0}
        />
      ))}

      <OrderButton>Order Now</OrderButton>
    </div>
  );
};

export default buildControls;
