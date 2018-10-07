import React, { Component } from 'react';
import AppBar from './AppBar'
import BeerTable from './containers/BeerTable'
import './App.css'
import SignUpModal from './containers/SignUpModal';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar></AppBar>
        <SignUpModal onSubmit={this.props.onSubmit}></SignUpModal>
        <BeerTable></BeerTable>
      </div>
    );
  }
}

const mapStateToProps = (state) => state
const ConnectedApp = connect(mapStateToProps)(App)
export default ConnectedApp