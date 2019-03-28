import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Facebook from './components/Facebook';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Staff from './pages/Staff';
import PastOrders from './pages/PastOrders';
import AccountSettings from './pages/AccountSettings';
import Login from './components/auth/Login';

import './App.css';

function onAuthRequired({ history }) {
  history.push('/login');
}

class App extends Component {
  render() {
    return (
      <Router>
        <Security issuer='https://dev-794098.okta.com/ouath2/default'
                  client_id='0oad3z61aNNdrnwyg356'
                  redirect_uri={window.location.origin + '/implicit/callback'}
                  onAuthRequired={onAuthRequired} >
         <div className="App">
            <Navbar />
            <Facebook />
            <div className="container">
              <Route path="/" exact={true} component={Home} />
              <SecureRoute path="/staff" exact={true} component={Staff} />
              <Route
                path="/login"
                render={() => (
                  <Login baseUrl="https://dev-794098.okta.com" />
                )}
                
              />
              <Route path="/implicit/callback" component={ImplicitCallback} />
            </div>
          </div>
        </Security>
      </Router>
    );
  }
}

export default App;
