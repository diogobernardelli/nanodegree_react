import React, {Component} from 'react'
import PropTypes from 'prop-types'

class createNewItem extends Component {
  state = {
  	value: ''
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  addItem = event => {
    event.preventDefault();
    this.setState(oldState => ({
      value: this.state.value
    }));
  };

  inputIsEmpty = () => {
    return this.state.value === '';
  };

  render() {
    const {handleAddItem} = this.props

    return(
    	<form onSubmit={this.addItem}>
          <input
            type="text"
            placeholder="Enter New Item"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button disabled={this.inputIsEmpty()} onClick={() => handleAddItem(this.state.value)}>Add</button>
        </form>
    )
  }
}

createNewItem.propTypes = {
  handleAddItem: PropTypes.func.isRequired
}

export default createNewItem