import React, {Component} from 'react'
// import {connect} from 'react-redux'

// import sessionAdapter from '../adapters/sessionAdapter'
// import {setUser} from '../actions/userActions'
// import {setLogin, setInitialState} from '../actions/sessionActions'


class Login extends Component  {
  // state = {
  //   username: '',
  //   password: ''
  // }

  // handleChange = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  // }

  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   sessionAdapter.login(this.state)
  //   .then(this.setLocalStorage)
  // }

  // setLocalStorage = (res) => {
  //   window.localStorage.setItem('jwt', res.jwt)
  //   // this.props.setLogin()
  //   // this.props.setUser(res.user)
    
  //   this.props.setInitialState(res.user)
  // }



  render() {
    console.log("PROPS", this.props);
    
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <label htmlFor="username">Username</label>
          <input type='text' value={this.props.user.username} name='username' id='username' onChange={this.props.handleChange} />

          <label htmlFor="password">Password</label>
          <input type='text' value={this.props.user.password} name='password' id='password' onChange={this.props.handleChange}/>

          <input type='submit' />
        </form>
        <button onClick={this.props.handleFormSelection}>Need to Create an Account?</button> 
      </div>
    )
  }
}


// const mapStateToProps = state => {
//   return { loggedIn: state.session.loggedIn }
// }

export default Login
