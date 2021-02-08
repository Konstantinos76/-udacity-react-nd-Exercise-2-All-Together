import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './ChatWindow';

const users = [
    { username: 'Amy' },
    { username: 'John' }
]

class App extends Component {
  state = {
    messages: []
  }

  handleAddMessage = (message, user) => {
    const messageObj = {
      username: user,
      text: message
    }

    this.setState((currentMessageList) => ({
      messages: [...currentMessageList.messages, messageObj],
      }))
  }
  
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">ReactND - Coding Practice</h1>
                </header>
                <div className="container">
                    <ChatWindow 
      					user={users[0].username} 
						onAddMessage={this.handleAddMessage} 
						messageList={this.state.messages}/> 
                    <ChatWindow 
						user={users[1].username} 
						onAddMessage={this.handleAddMessage} 
						messageList={this.state.messages}/>
                </div>
            </div>
        )
    }
}

export default App;