import React from 'react';

class RecipeIngredient extends React.Component {
  constructor(props) {
  	super(props);
  }

  render() {
  	return (
  	  <li className="searchIngredient">
        {this.props.ingredient.text} {this.props.ingredient.weight}
  	  </li>
  	)
  }
}

export default RecipeIngredient;