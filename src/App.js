import React, { Component } from 'react';
import AppBar from './AppBar'
import BeerTable from './components/BeerTable'
import './App.css'
import SignUpModal from './containers/SignUpModal';

class App extends Component {
  render() {
    const { beers } = this.props
    return (
      <div className="App">
        <AppBar></AppBar>
        <SignUpModal onSubmit={this.props.onSubmit}></SignUpModal>
        <BeerTable beers={{beers}}></BeerTable>
      </div>
    );
  }
}

export default App;
