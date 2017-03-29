import React from 'react'
import $ from 'jquery'

import RecipeSearchResults from './RecipeSearchResults'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: null,
      recipes: []
    }
  }

  setSearchTerm (searchTerm) {
    this.setState({searchTerm: searchTerm})
  }

  searchRecipes (searchTerm) {
    // send ajax request to server, which then searches db for searchTerm
    // searchTermForAjax was 'searchTerm' which wasn't accepted as it was a duplicate search term
    let searchTermForAjax = {searchTerm: this.state.searchTerm}
    const context = this

    $.ajax({
      url: '/searchRecipes',
      type: 'POST',
      data: JSON.stringify(searchTermForAjax),
      // type: 'GET',
      // data: searchTerm,
      contentType: 'application/json',
      // upon success, adds results to this.state.recipes
      success: function (data) {
        console.log('ajax request to search recipes was successful!')
        console.log('response', data)
        context.setState({recipes: data})
      },
      error: function (err) {
        console.log('ajax request to search recipes failed')
      }
    })
  };

  render () {
    return (
      <div>
        <div className='search'>
          <img className='searchImage' src='assets/images/steak.jpg' alt='steak' />
          <span className='searchText'>
            <h3>Yummly</h3>
            <input type='text'
              onKeyUp={(event) => {
                this.setSearchTerm(event.target.value)
              }}
            />
            <button onClick={(event) => {
              this.searchRecipes(this.state.searchTerm)
            }}
            >Search Recipes</button>
          </span>
        </div>

        <div className='results'>
          <ul>
            {this.state.recipes.map((recipe, index) => <RecipeSearchResults recipe={recipe} key={index} />)}
          </ul>
        </div>
      </div>
    )
  }
}

export default Home
