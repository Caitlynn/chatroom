import React from 'react';
import Chip from 'material-ui/Chip';
import PropTypes from 'prop-types';
import './MessageBubble.css'

const MessageBubble = (props) => {
  return (
    <div className="Message-bubble_item">
      {props.username !== '' &&
        <Chip labelStyle={{ wordBreak: 'break-all', whiteSpace: 'normal' }}>
          {props.username}: {props.message}
        </Chip>
      }
    </div>
  )
}

MessageBubble.propTypes = {
  message: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
}

export default MessageBubble