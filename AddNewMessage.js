import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AddNewMessage extends Component {
  static propTypes = {
    onAddMessage: PropTypes.func.isRequired,
    user: PropTypes.string.isRequired
  }

  state = {
    message: ''
  }

 addMessage = (event) => {
    event.preventDefault()
    this.props.onAddMessage(this.state.message, this.props.user)
    
    this.setState({ message: ''})
  }

  newMessage = (message) => {
    this.setState({ message })
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
                        value={this.state.message}
                        onChange={(event) => this.newMessage(event.target.value)}
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