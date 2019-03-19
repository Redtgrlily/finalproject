import React, { Component } from 'react';
import './styles/css/app.css';
import Navbar from './components/navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Cool Hands Courier
        </header>
        <Navbar></Navbar>
      </div>
    );
  }
}

export default App;
