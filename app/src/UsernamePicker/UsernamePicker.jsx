import React from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class UsernamePicker extends React.Component {

  static propTypes = {
    onSelect: PropTypes.func.isRequired
  }

  state = {
    username: ''
  }

  onUsernameChange = (event, username) => {
    this.setState({ username })
  }

  onSubmit = (event) => {
    event.preventDefault()
    if (this.state.username !== '') {
      this.props.onSelect(this.state.username)
    }
  }

  render() {
    return (
      <Paper className="App_pre-screen">
        <p>Enter a name to start a chat!</p>
        <form className="App_form" onSubmit={this.onSubmit}>
          <TextField
            className="App_name-input"
            name="name"
            value={this.state.username}
            onChange={this.onUsernameChange}
            placeholder="Enter name..."
          />
          <RaisedButton
            className="App_submit-button"
            label="Enter"
            type="submit"
          />
        </form>
      </Paper>
    )
  }
}

export default UsernamePicker
