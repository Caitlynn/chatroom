import React from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import MessageList from '../MessageList/MessageList'
import MessageComposer from '../MessageComposer/MessageComposer'

export default function ChatRoom(props) {
  return (
    <Paper className="App_paper">
      <MessageList username={username} />
      <MessageComposer username={username}/>
    </Paper>
  )
}

ChatRoom.propTypes = {
  username: PropTypes.string.isRequired
}
