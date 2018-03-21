import React, { Component, Fragment } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const ingredientCosts = {
  salad: 0.5,
  bacon: 1.5,
  cheese: 0.75,
  meat: 1
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 3,
    purchasable: false,
    purchasing: false
  };

  addIngredient = type => {
    const oldCount = this.state.ingredients[type];
    const updatedIngredients = {
      ...this.state.ingredients,
      [type]: oldCount + 1
    };
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: this.state.totalPrice + ingredientCosts[type],
      purchasable: this.getPurchasableState(updatedIngredients)
    });
  };

  removeIngredient = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount === 0) {
      return;
    }

    const updatedIngredients = {
      ...this.state.ingredients,
      [type]: oldCount - 1
    };

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: this.state.totalPrice - ingredientCosts[type],
      purchasable: this.getPurchasableState(updatedIngredients)
    });
  };

  getPurchasableState(ingredients) {
    const totalIngredients = Object.keys(ingredients).reduce((acc, current) => {
      return acc + ingredients[current];
    }, 0);

    return totalIngredients > 0;
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    alert('You continued');
  };

  render() {
    return (
      <Fragment>
        <Burger ingredients={this.state.ingredients} />
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler}
            totalPrice={this.state.totalPrice}
          />
        </Modal>
        <BuildControls
          add={this.addIngredient}
          remove={this.removeIngredient}
          ingredients={this.state.ingredients}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          orderHandler={this.purchaseHandler}
        />
      </Fragment>
    );
  }
}

export default BurgerBuilder;
