import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// import injectTapEventPlugin from 'react-tap-event-plugin'

// injectTapEventPlugin()
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

// import injectTapEventPlugin from 'react-tap-event-plugin'

// injectTapEventPlugin();

const muiTheme = getMuiTheme({
  toolbar: {
    height: '56px'
  }
});
ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
)
