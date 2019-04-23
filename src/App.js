import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Landing from './components/Landing';
import About from './components/About';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Account from './components/Account';


import ScrollToTop from './ScrollToTop';

class App extends Component {

  render() {
    return (
      <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
        <ScrollToTop>
          <Navbar />
          <Route exact path="/" component={ Landing } />
          <Route exact path="/about" component={ About } />
          <Route exact path="/reviews" component={ Reviews } />
          <Route exact path="/contact" component={ Contact } />
          <Route exact path="/account" component={ Account } />
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
