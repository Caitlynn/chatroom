import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import { createMessage } from '../api_service'
import './MessageComposer.css'

class MessageComposer extends Component {
  constructor(props){
    super(props)
    this.state = {
      message: '',
    }
  }

  onDraftChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  postMessage = async (event) => {
    event.preventDefault()
    await createMessage({
      message: this.state.message,
      username: this.props.username
    })
    this.setState({ message: '' })
  }

  render() {
    const { message } = this.state
    return (
      <div className="Message-composer">
        <form className="Message-composer_form" onSubmit={this.postMessage}>
          <TextField
            className="Message-composer_chat-input"
            value={message}
            onChange={this.onDraftChange}
            placeholder="Enter message..."
          />
          <RaisedButton
            className="Message-composer_sendbutton"
            label="Send"
            type="submit"
          />
        </form>
      </div>
    )
  }
}

MessageComposer.propTypes = {
  username: PropTypes.string.isRequired
}

export default MessageComposer