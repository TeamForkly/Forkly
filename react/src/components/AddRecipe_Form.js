//AddRecipereturn 
import React, { Component } from 'react'
import AddRecipeIngredients from './AddRecipeIngredients'
import $ from 'jquery'
import Divider from 'material-ui/Divider'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

const style = {
  marginLeft: 20,
};



class AddRecipeForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      directions: '',
      ingredients: [{quantity: 1, units: 'spoonful', ingredient: 'sugar', showButton: true}]
    }
    this.addRow = this.addRow.bind(this)
    this.handleIngredientsChange = this.handleIngredientsChange.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    //Lets review this
    var forked = this.context.router.history.location.pathname
    let forkedId = forked.slice(forked.lastIndexOf('/') + 1)
    let boundThis = this
    // if history has url at end
    if (forkedId.length > 0) {
      console.log('hi')
      $.ajax({
        url: '/getRecipeById',
        type: 'POST',
        data: JSON.stringify({id: forkedId}),
        contentType: 'application/json',
        success: function (data) {
          boundThis.setState({
            name: data.name,
            directions: data.directions,
            ingredients: data.ingredients
          })
        },
        error: function (err) {
          console.error('could not retrieve any recipes for user')
        }
      })
    }
  }

  handleSubmit (event) {
    const { router } = this.context
    $.ajax({
      url: '/api/addRecipe',
      data: JSON.stringify(this.state),
      method: 'POST',
      contentType: 'application/JSON',
      success: (recipeId) => {
        router.history.push('/recipe/' + recipeId)
      }
    })
    event.preventDefault()
  }

  addRow () {
    let myIngredients = this.state.ingredients
    myIngredients[myIngredients.length - 1].showButton = false
    myIngredients.push({quantity: 0, units: '', ingredient: '', showButton: true})
    this.setState({ingredients: myIngredients})
  }

  handleIngredientsChange (event, index) {
    const target = event.target
    const name = target.name
    const value = target.value

    let ing = this.state.ingredients
    ing[index][name] = value

    this.setState({
      ingredients: ing
    })
  }

  handleInputChange (event) {
    const target = event.target
    const name = target.name
    const value = target.value

    this.setState({
      [name]: value
    })
  }

    render () {
      return (
        <div className='createRecipe'>
      <Paper zDepth={2}>
        <TextField hintText="Recipe Name" style={style} underlineShow={false} />
        <Divider />
        <TextField hintText="Ingredients" inputRef={ref => {this.Ingredients = ref; }} style={style} underlineShow={false} />
        <Divider />
        <TextField hintText="Last name" style={style} underlineShow={false} />
        <Divider />
        <TextField hintText="Email address" style={style} underlineShow={false} />
        <Divider />
      </Paper>
      </div>
    );
  }
}


export default AddRecipeForm