import React, { Component } from 'react';

class Login extends Component{
  state = { 
    name: null, 
    email: null
  } 
  handleChange = (event) => {
    this.setState({ 
      [event.target.name]:event.target.value
    })
  }
  handleSubmit = (event) =>{
    event.preventDefault();
    console.log('User name : ' + this.state.name)
    console.log('User Email : ' + this.state.email)
    const url ='http://webhook.site/570cb185-c3b5-430a-82f7-db34f43e6d71'
    const data = { 
      name:this.state.name,
      email:this.state.email 
    }
    fetch(url, { 
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(data),
      headers:{ 
        'Content-Type': 'application/json',
        'Content-type': 'application/json' 
      } 
    })
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
  }
  render(){
  return(
    <form onSubmit={this.handleSubmit}>
      <input type='text' name='name' onChange={this.handleChange} placeholder="Username ..."/>
      <input type='email' name='email' onChange={this.handleChange} placeholder="Email ..." />
      <input type='submit' value='Add user' /> 
    </form>
  )
  }
}

export default Login;