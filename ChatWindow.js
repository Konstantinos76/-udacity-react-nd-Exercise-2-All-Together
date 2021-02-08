import React from 'react';
import MessageList from './MessageList'
import AddNewMessage from './AddNewMessage'
import PropTypes from 'prop-types'

const ChatWindow = (props) => {
  return (
    <div className="chat-window">
     <h2>Super Awesome Chat</h2>
     <div className="name sender">{props.user}</div>
     <MessageList messageList={props.messageList} user={props.user} />
	 <AddNewMessage onAddMessage={props.onAddMessage} user={props.user} />
	</div>
  )
}

ChatWindow.propTypes = {
  user: PropTypes.string.isRequired,
  onAddMessage: PropTypes.func.isRequired,
  messageList: PropTypes.array.isRequired
}

export default ChatWindow