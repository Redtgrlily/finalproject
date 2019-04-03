import React, { Component } from 'react'

import logo from './logo.svg'
import './App.css'
import ContactForm from './contact'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Cool Hands Couriers</h2>
        </div>
        <ContactForm />
      </div>
    )
  }
}

export default App
