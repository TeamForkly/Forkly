import React from 'react'

class RecipeIngredient extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <li className='searchIngredient'>
        {this.props.ingredient.quantity} {this.props.ingredient.units} {this.props.ingredient.ingredient}
      </li>
    )
  }
}

export default RecipeIngredient
