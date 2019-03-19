import React, { Component } from 'react';
import './navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <Container>

          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Navbar>

        </Container>
      </div>
    );
  }
}

export Navbar;
