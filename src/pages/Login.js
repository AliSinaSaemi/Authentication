import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
class Login extends Component{
  state = {
    username: '',
    password: ''
  }
  handleChange = (event) => {
    this.setState({ 
      [event.target.name]:event.target.value
    })
  }
  handleSubmit = (event) =>{
    const { username, password } = this.state
    event.preventDefault();
    console.log('User name : ' + this.state.name)
    console.log('User Email : ' + this.state.email)
    const url ='http://webhook.site/570cb185-c3b5-430a-82f7-db34f43e6d71'
    const data = { 
      username,
      password
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
      <React.Fragment>
        <Container fixed>
          <div className="app">
            <Typography align='center' variant="h4" component="h2" gutterBottom>
              Login Form
            </Typography>
            <form style={{ 'text-align': 'center' }} onSubmit={this.handleSubmit}>
              <Grid container>
                <Grid style={{'margin': 'auto'}} justify='center' item xs={3}>
                  <TextField name='username' type="text" id="standard-basic" label="Email or Username" fullWidth="true" onChange={this.handleChange} value={this.state.email} />
                </Grid>
              </Grid>
              <Grid container>
                <Grid style={{'margin': '20px auto'}} justify='center' item xs={3}>
                  <TextField name='password' type="password" id="standard-basic" label="Password" fullWidth="true" onChange={this.handleChange} value={this.state.password} />
                </Grid>
              </Grid>
              <Button size='medium' type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </form>
          </div>
        </Container>
      </React.Fragment>
  )
  }
}

export default Login;