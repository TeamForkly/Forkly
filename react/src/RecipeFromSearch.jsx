import React from 'react';
import RecipeFromSearchHeader from './RecipeFromSearchHeader.jsx';
import IngredientsOfRecipe from './IngredientsOfRecipe.jsx';
import NutritionOfRecipe from './NutritionOfRecipe.jsx';

const props = {};
props.recipe = {
  photo: 'http://assets.marthastewart.com/styles/wmax-520-highdpi/d50/fried-eggs-charred-tomatoes-toast-2-0008-mld110238/fried-eggs-charred-tomatoes-toast-2-0008-mld110238_vert.jpg?itok=nzMQxE-O',
  name: 'Eggs on Eggs: Soft Egg and Fish Roe Toast',
  ingredients: [
    '4 large slices of bread',
    '12 eggs',
    '2/3 cups butter',
    '1 bunch chives, chopped',
    '1 pound trout roe',
    'salt and pepper',
  ],
  nutritionalFacts: {
    Fat: '51g',
    Carbs: '21g',
    Protein: '46g',
    Cholesterol: '985mg',
  },
};

const RecipeFromSearch = () => {
  return (
    <div className="container">
      <RecipeFromSearchHeader photo={props.recipe.photo} name={props.recipe.name}/>
      <div className="row-from-search row">
        <div className="col-lg-3" />
        <IngredientsOfRecipe ingredients={props.recipe.ingredients} />
        <NutritionOfRecipe nutritionalFacts={props.recipe.nutritionalFacts} />
      </div>
    </div>
  );
};

export default RecipeFromSearch;
