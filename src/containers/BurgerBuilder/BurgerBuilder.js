import React, { Component, Fragment } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

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
    totalPrice: 3
  };

  addIngredient = type => {
    const oldCount = this.state.ingredients[type];
    const updatedIngredients = {
      ...this.state.ingredients,
      [type]: oldCount + 1
    };
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: this.state.totalPrice + ingredientCosts[type]
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
      totalPrice: this.state.totalPrice - ingredientCosts[type]
    });
  };

  render() {
    return (
      <Fragment>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          add={this.addIngredient}
          remove={this.removeIngredient}
          ingredients={this.state.ingredients}
          price={this.state.totalPrice}
        />
      </Fragment>
    );
  }
}

export default BurgerBuilder;
