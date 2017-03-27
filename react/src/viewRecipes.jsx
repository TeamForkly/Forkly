import React from 'react';
import $ from 'jquery';

class ViewRecipes extends React.Component {
  constructor(props) {
    super(props);
  }

  //before initial render, use ajax call to retrieve all recipes belonging to user
  componentDidMount() {
    console.log('INSIDE GET REQUEST');
    var boundThis = this;
    $.ajax({
      url: '/getAllRecipes',
      type:'GET',
      success: function(data){
        console.log('SUCCESS!', data);
        boundThis.setState({recipes: data});
      },
      error: function(err) {
        console.log('could not retrieve any recipes for user');
      }
    });
  }

  handleClick(recipeId) {
    //redirect to /recipes/recipeId
    const { router } = this.context
    router.history.push('/recipe/' + recipeId);
  }

  render () {
    console.log('RENDER COMPONENT STATE', this.state);
    var recipesArray = [];
    var template = '';

    if (this.state) {
      console.log('RENDER STATE', this.state)
      this.state.recipes.forEach((recipe, index) => {
      recipesArray.push(<li key={index} value={recipe} onClick={() => this.handleClick(recipe._id)}>{recipe.name}</li>)
      });

      template = <div>
        <h3>Welcome, here are your recipes!</h3>
        <ul>
          {recipesArray}
        </ul>
      </div>
    } else {
      template = <div>
        <h3>Loading Your Recipes!</h3>
      </div>
    }
    //need to render list of all recipes belonging to user
    return (
      template
    )
  }
}

ViewRecipes.contextTypes = {
  router: React.PropTypes.object
}

export default ViewRecipes;