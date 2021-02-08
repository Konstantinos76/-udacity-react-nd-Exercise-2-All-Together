import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AddNewMessage extends Component {
  static propTypes = {
    onAddMessage: PropTypes.func.isRequired,
    user: PropTypes.string.isRequired
  }

  state = {
    message: '',
    user: ''
  }

 addMessage = (event) => {
    event.preventDefault()
    this.props.onAddMessage(this.state.message, this.state.user)
    
    this.setState({ message: ''})
  }

  newMessage = (message, user) => {
    this.setState({ message, user })
  }

  isDisabled = () => {
    return this.state.message === ''
  }


    render() {
        return (
            <div>
                <form className="input-group" onSubmit={this.addMessage}>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Type a message..."
                        value={this.state.user === this.props.user ? this.state.message : 'Type a message...'}
                        onChange={(event) => this.newMessage(event.target.value, this.props.user)}
                    />
                    <div className="input-group-append">
                        <button
                            className="btn submit-button"
                            disabled={this.isDisabled()}>
                            SEND
                    	</button>
                    </div>
                </form>
            </div>

        )
    }
}

export default AddNewMessage