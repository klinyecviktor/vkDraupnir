import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const styles = {
  container: {
    backgroundColor: '#507299',
    width: '100%',
    height: '100vh',
  },
  child: {
    backgroundColor: "#FFF",
    width: 350,
    padding: '0 30px',
    height: 300,
    position: 'absolute',
    left:0, right:0, top:0, bottom:0,
    margin: 'auto',
    textAlign: 'center'
  }
}

const theme = {
  textField: {
    focusColor: '#507299',
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.loginHandler = this.loginHandler.bind(this);
  }

  handleChange(e){
    const {id, value} = e.target;
    console.log({[id]: value})

    this.setState({[id]: value})
  }

  loginHandler(){
    Meteor.call('vk.login', this.state.email, this.state.password);
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
        <div className="container" style={styles.container}>
          <Paper style={styles.child}>
            <header>
              <h1>VK Draupnir</h1>
            </header>
            <TextField
              id="email"
              hintText="Enter your email"
              floatingLabelText="Email"
              value={this.state.email}
              onChange={this.handleChange}
              fullWidth={true}
            /><br />
            <TextField
              id="password"
              hintText="Enter your password"
              floatingLabelText="Password"
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              fullWidth={true}
            /><br />
            <br />
            <RaisedButton label="Login" onClick={this.loginHandler}/>
          </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}
