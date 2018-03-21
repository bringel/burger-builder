import React from 'react';

import { SuccessButton, DangerButton } from '../../UI/Button/Button';

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(ing => (
    <li key={ing}>
      <span style={{ textTransform: 'capitalize' }}>{ing}</span>: &nbsp;
      {props.ingredients[ing]}
    </li>
  ));
  return (
    <React.Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients: </p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: {props.totalPrice.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <DangerButton onClick={props.purchaseCancelled}>CANCEL</DangerButton>
      <SuccessButton onClick={props.purchaseContinued}>CONTINUE</SuccessButton>
    </React.Fragment>
  );
};

export default orderSummary;
