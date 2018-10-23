import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path="/" component={ Landing } />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
