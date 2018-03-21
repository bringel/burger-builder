import React from 'react';
import { css } from 'react-emotion';

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
    </div>
  );
};

export default buildControls;
