import React, {Component} from 'react';

class AddMessage extends Component {
  state = {
    currentUser: this.props.currentUser.username,
    message: ''
  }

  isDisabled = () => {
    return this.state.message === '';
  };

  handleInputChange = event => {
    const { value } = event.target;
    this.setState(currState => ({
      ...currState,
      message: value
    }));
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addMessage(this.state.currentUser, this.state.message)
    this.setState(currState => ({
      ...currState,
      message: ''
    }));
  }

  render() {
    return(
      <form className="input-group" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="message"
          className="form-control"
          placeholder="Enter your message..."
          value={this.state.message}
          onChange={this.handleInputChange}
        />
        <div className="input-group-append">
        <button className="btn submit-button" disabled={this.isDisabled()}>
	        SEND
        </button>
        </div>
      </form>
    )
  }
}

export default AddMessage;