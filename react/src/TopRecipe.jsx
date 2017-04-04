import React from 'react';

const TopRecipe = (props) => {
  return (
    <div className="col-lg-3">
      <h1>{props.recipe.name}</h1>
      <ul>
        {props.recipe.ingredients.map((ingredient) =>
          <li>{ingredient}</li>
        )}
      </ul>
    </div>
  );
};

export default TopRecipe;
