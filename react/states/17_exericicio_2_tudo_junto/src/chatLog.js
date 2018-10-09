import React from 'react';
import PropTypes from 'prop-types';

const ChatLog = props => {
  return (
    <ul className="message-list">
    	{props.messages.map((message, index) => (
		    <li
			    key={index}
				className={
				  message.username === props.currentUser.username ? 'message sender' : 'message recipient'
					}
				>
				<p>{`${message.username}: ${message.text}`}</p>
			</li>
        ))}
	  </ul>
	)
}

ChatLog.propTypes = {
	messages: PropTypes.array.isRequired,
	currentUser: PropTypes.object.isRequired
}

export default ChatLog;