import React, {Component} from 'react';
import ChatLog from './chatLog.js';
import AddMessage from './addMessage.js';
import PropTypes from 'prop-types';

class ChatWindow extends Component {
  addMessage = (username, message) => {
    this.props.PushToListMessage(username, message)
  }

  handleSubmit = () => {
    return this.props.addMessage()
  }
  
  render () {
    const {messages, currentUser} = this.props
    return (
      <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{currentUser.username}</div>
        <ChatLog messages={messages} currentUser={currentUser} />
        <div>
          <AddMessage currentUser={currentUser} addMessage={this.addMessage} />
        </div>
      </div>
    )
  }
}

ChatWindow.propTypes = {
  messages: PropTypes.array.isRequired
}

export default ChatWindow;