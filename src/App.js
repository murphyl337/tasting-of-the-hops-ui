import React, { Component } from 'react';
import AppBar from './AppBar'
import BeerTable from './components/BeerTable'
import './App.css'
import SignUpModal from './components/SignUpModal';
import beers from './data/beers'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar></AppBar>
        <SignUpModal></SignUpModal>
        <BeerTable beers={{beers}}></BeerTable>
      </div>
    );
  }
}

export default App;
