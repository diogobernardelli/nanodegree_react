import React from 'react';
import ShopList from './shopList.js'
import DeleteLastItem from './deleteLastItem.js'
import CreateNewItem from './createNewItem.js'
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    items: [],
  };

  handleAddItem = item => {
    this.setState(prevState => ({ items: [...prevState.items, item] }));
  };


  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
		<CreateNewItem handleAddItem={this.handleAddItem} />
		<DeleteLastItem 
			deleteLastItem={this.deleteLastItem}
			noItemsFound={this.noItemsFound()}
		/>

        <p className="items">Items</p>

		{this.state.items.length !== 0 && (
			<ShopList items={this.state.items} />
		)}
      </div>
    );
  }
}

export default App;
