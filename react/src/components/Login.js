import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      // username: '',
      // password: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit (event) {
    event.preventDefault()

    console.log('username: ', this.state.username)

    var user = {
      username: this.state.username,
      password: this.state.password
    }

    $.ajax({
      url: '/login',
      type: 'POST',
      // contentType: 'application/JSON',
      data: JSON.stringify(user),
      success: function (data) {
        console.log('successful login post')
      },
      error: function (err) {
        console.log('login error')
      }
    })
  }

  componentDidMount () {
    $.ajax({
      url: '/verifylogin',
      type: 'GET',
      success: function (user) {
        console.log('req.user object: ', user)
      },
      error: function (err) {
      }
    })
  }

  render () {
    if (this.props.username === null) {
      return (
        <a className='loginFacebook' href='/auth/facebook'>Login with Facebook</a>
      )
    } else {
      return (
        <div>Welcome, {this.props.username}</div>
      )
    }
    // return (
    //   <div>
    //     <h1>Login</h1>
    //     <form onSubmit={this.handleSubmit}>
    //       <label>
    //         Username:
    //         <input name="username" type="text" value={this.state.username} onChange={this.handleInputChange}/>
    //       </label>
    //       <label>
    //         Password:
    //         <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange}/>
    //       </label>
    //       <input type="submit"/>
    //     </form>
    //   </div>
    // )
  }
}

export default Login
