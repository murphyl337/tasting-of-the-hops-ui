import React, { Component } from 'react';
import AppBar from './components/AppBar'
import BeerTable from './containers/BeerTable'
import './App.css'
import SignUpModal from './containers/SignUpModal';
import {connect} from 'react-redux';
import { submitBeer } from './reducers/beer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar></AppBar>
        <SignUpModal onSubmit={this.props.submitBeer}></SignUpModal>
        <BeerTable></BeerTable>
      </div>
    );
  }
}

export default connect(
  (state) => state, 
  {submitBeer}
)(App)