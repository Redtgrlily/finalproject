import React, { Component } from 'react';
import '../styles/css/navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">

          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Navbar className="mr-auto">
              <Navbar.Link href="#home">Home</Navbar.Link>
              <Navbar.Link href="#features">Features</Navbar.Link>
              <Navbar.Link href="#pricing">Pricing</Navbar.Link>
            </Navbar>
          </Navbar>
      </div>
    );
  }
}

export Navbar;
