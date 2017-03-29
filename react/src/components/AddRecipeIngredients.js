import React from 'react'

class AddRecipeIngredients extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.props.handleIngredientsChange(event, this.props.index)
  }

  render () {
    if (this.props.showButton) {
      return (
        <tbody>
          <tr>
            <td><input type='number' name='quantity' value={this.props.quantity} onChange={this.handleChange} /></td>
            <td><input type='text' name='units' value={this.props.units} onChange={this.handleChange} /></td>
            <td><input type='text' name='ingredient' value={this.props.ingredient} onChange={this.handleChange} /></td>
            <td><input type='button' name='addRecipeNewRow' value='Add Row' onClick={this.props.addRow} /></td>
          </tr>
        </tbody>
      )
    } else {
      return (
        <tbody>
          <tr>
            <td><input type='number' name='quantity' value={this.props.quantity} onChange={this.handleChange} /></td>
            <td><input type='text' name='units' value={this.props.units} onChange={this.handleChange} /></td>
            <td><input type='text' name='ingredient' value={this.props.ingredient} onChange={this.handleChange} /></td>
          </tr>
        </tbody>
      )
    }
  }
}

export default AddRecipeIngredients
