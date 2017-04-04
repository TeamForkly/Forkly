import React, { PropTypes } from 'react';

const propTypes = {
  ingredients: PropTypes.array.isRequired,
};

const IngredientsOfRecipe = (props) => {
  return (
    <div className="col-lg-3">
      <ul>
        {props.ingredients.map((ingredient) =>
          <ol>{ingredient}</ol>
        )}
      </ul>
    </div>
  );
};

IngredientsOfRecipe.propTypes = propTypes;
export default IngredientsOfRecipe;
