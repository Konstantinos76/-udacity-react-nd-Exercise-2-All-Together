import React from 'react'
import PropTypes from 'prop-types'

const MessageList = (props) => {
  return(
    <ul className="message-list">
    	{props.messageList.map((message, index) => (
    		<li key={index}>
				<p className={message.username === props.user 
				? 'message sender' 
				: 'message recipient'}>
				{`${message.username}: ${message.text}`}
				</p>
			</li>
		))}     
    </ul>
  )
}

MessageList.propTypes = {
  messageList: PropTypes.array.isRequired,
  user: PropTypes.string.isRequired
}

export default MessageList