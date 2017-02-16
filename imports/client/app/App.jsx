import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import TextField from 'material-ui/TextField';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const styles = {
  container: {
    backgroundColor: '#1E90FF',
    width: '100%',
    height: '100vh',
  },
  child: {
    width: 300,
    height: 300,
    position: 'absolute',
    left:0, right:0, top:0, bottom:0,
    margin: 'auto',
    textAlign: 'center'
  }
}

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div className="container" style={styles.container}>
          <div  style={styles.child}>
            <header>
              <h1>VK Draupnir</h1>
            </header>
            <TextField
              hintText="Enter your email"
              floatingLabelText="Email"
              fullWidth={true}
            /><br />
            <TextField
              hintText="Enter your password"
              floatingLabelText="Password"
              type="password"
              fullWidth={true}
            /><br />
            <RaisedButton label="Login" />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
