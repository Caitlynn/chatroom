import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MessageBubble from '../MessageBubble/MessageBubble'
import { getMessages } from '../api_service'
import './MessageList.css'

class MessageList extends Component {

  static propTypes = {
    username: PropTypes.string.isRequired
  }

  state = {
    messages: []
  }

  interval = null
  containerRef = null

  componentDidMount() {
    this.interval = setInterval(this.pollMessages, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  pollMessages = async () => {
    const messages = await getMessages()
    this.setState({ messages })
    if (this.containerRef) {
      this.containerRef.lastChild.scrollIntoView({ behavior: "smooth" })
    }
  }

  getBubbleStyle(message) {
    let style;
    if (this.props.username === message.sender.name) {
      style = { alignSelf: 'flex-end' }
    } else {
      style = { alignSelf: 'flex-start' }
    }
    return style
  }

  render() {
    return (
      <div
        className="Message-list"
        ref={(ref) => this.containerRef = ref}
      >
        {this.state.messages.map((message) => {
          return (
            <div style={this.getBubbleStyle(message)}>
              <MessageBubble
                key={message.time}
                username={message.sender.name}
                message={message.text}
              />
            </div>
          )
        })}
      </div>
    )
  }
}

export default MessageList