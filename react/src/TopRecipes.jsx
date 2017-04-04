import React from 'react';
import TopRecipe from './TopRecipe.jsx';

const topRatedExampleData = [
  {
    name: 'Chicken Cordon Bleu Casserole',
    ingredients: [
      '1 egg1',
      '1/2 cup milk',
      '2 pounds skinless, boneless chicken breast halves - cut into chunks',
      '1 cup plain dried bread crumbs',
      '1 cup oil for frying',
      '8 ounces Swiss cheese, cubed',
      '8 ounces cubed ham',
      '1 (10.75 ounce) can condensed cream of chicken soup',
      '1 cup milk',
    ],
    likes: 100,
  },
  {
    name: 'Chicken Cordon Bleu Casserole',
    ingredients: [
      '1 egg2',
      '1/2 cup milk',
      '2 pounds skinless, boneless chicken breast halves - cut into chunks',
      '1 cup plain dried bread crumbs',
      '1 cup oil for frying',
      '8 ounces Swiss cheese, cubed',
      '8 ounces cubed ham',
      '1 (10.75 ounce) can condensed cream of chicken soup',
      '1 cup milk',
    ],
    likes: 99,
  },
  {
    name: 'Chicken Cordon Bleu Casserole',
    ingredients: [
      '1 egg3',
      '1/2 cup milk',
      '2 pounds skinless, boneless chicken breast halves - cut into chunks',
      '1 cup plain dried bread crumbs',
      '1 cup oil for frying',
      '8 ounces Swiss cheese, cubed',
      '8 ounces cubed ham',
      '1 (10.75 ounce) can condensed cream of chicken soup',
      '1 cup milk',
    ],
    likes: 98,
  },
  {
    name: 'Chicken Cordon Bleu Casserole',
    ingredients: [
      '1 egg4',
      '1/2 cup milk',
      '2 pounds skinless, boneless chicken breast halves - cut into chunks',
      '1 cup plain dried bread crumbs',
      '1 cup oil for frying',
      '8 ounces Swiss cheese, cubed',
      '8 ounces cubed ham',
      '1 (10.75 ounce) can condensed cream of chicken soup',
      '1 cup milk',
    ],
    likes: 97
  },
  {
    name: 'Chicken Cordon Bleu Casserole',
    ingredients: [
      '1 egg6',
      '1/2 cup milk',
      '2 pounds skinless, boneless chicken breast halves - cut into chunks',
      '1 cup plain dried bread crumbs',
      '1 cup oil for frying',
      '8 ounces Swiss cheese, cubed',
      '8 ounces cubed ham',
      '1 (10.75 ounce) can condensed cream of chicken soup',
      '1 cup milk',
    ],
    likes: 95
  },
  {
    name: 'Chicken Cordon Bleu Casserole',
    ingredients: [
      '1 egg5',
      '1/2 cup milk',
      '2 pounds skinless, boneless chicken breast halves - cut into chunks',
      '1 cup plain dried bread crumbs',
      '1 cup oil for frying',
      '8 ounces Swiss cheese, cubed',
      '8 ounces cubed ham',
      '1 (10.75 ounce) can condensed cream of chicken soup',
      '1 cup milk',
    ],
    likes: 96
  },
];

const TopRecipes = () => {
  return (
    <div className="container">
      {topRatedExampleData.sort((a, b) => b.likes - a.likes).map((recipe) =>
        <TopRecipe recipe={recipe}/>
      )}
    </div>
  );
};

export default TopRecipes;
