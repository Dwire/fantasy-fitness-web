import React, {Component} from 'react'

// import userAdapter from '../adapters/userAdapter'


class Signup extends Component  {
  // state = {
  //   username: '',
  //   bio: '',
  //   tagline: '',
  //   password: ''
  // }

  // handleChange = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  // }

  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   userAdapter.create(this.state).then(console.log)
  // }

  render() {
    console.log(this.state);
    
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <label htmlFor="username">Username</label>
          <input type='text' name='username' id='username' value={this.props.user.username} onChange={this.props.handleChange} />

          <label htmlFor="password">Password</label>
          <input type='text' name='password' id='password' value={this.props.user.password} onChange={this.props.handleChange}/>

          <label htmlFor="bio">Bio</label>
          <input type='text' name='bio' id='bio' value={this.props.user.bio} onChange={this.props.handleChange}/>

          <label htmlFor="tagline">Tagline</label>
          <input type='text' name='tagline' id='tagline' value={this.props.user.tagline} onChange={this.props.handleChange}/>

          <input type='submit'/>
        </form>
        <button onClick={this.props.handleFormSelection}>Already Have an Account?</button> 
      </div>
    )
  }
}

export default Signup