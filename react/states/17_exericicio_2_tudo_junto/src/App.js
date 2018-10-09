import React, { Component } from 'react';
import ChatWindow from './chatWindow.js';
import logo from './logo.svg';
import './App.css';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

const users = [{ username: 'Amy' }, { username: 'John' }];

class App extends Component {
  state = {
    messages: [
      { username: 'Amy', text: 'Hi, Jon!' },
      { username: 'Amy', text: 'How are you?' },
      { username: 'John', text: 'Hi, Amy! Good, you?' }
    ]
  }

  PushToListMessage = (username, message) => {
      this.setState(prevState => ({ 
        messages: [...prevState.messages, {
          username: username,
          text: message
        }]
      }));
  }
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          {users.map(user => (
            <ChatWindow messages={this.state.messages} currentUser={user} PushToListMessage={this.PushToListMessage} />
          ))}
          
        </div>         
      </div>
    );
  }
}

export default App;
