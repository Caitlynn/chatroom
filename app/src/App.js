import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import UsernamePicker from './UsernamePicker/UsernamePicker'
import ChatRoom from './ChatRoom/ChatRoom'
import './App.css'

class App extends Component {
  state = {
    username: '',
    ready: false
  }

  onUsernameSelect = (username) => {
    this.setState({
      username: username,
      ready: true
    })
  }

  render() {
    const { username, ready } = this.state
    return (
      <MuiThemeProvider>
        <div className="App">
          {ready
            ? <ChatRoom username={username} />
            : <UsernamePicker onSelect={this.onUsernameSelect} />
          }
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App