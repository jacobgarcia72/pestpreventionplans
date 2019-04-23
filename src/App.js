import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Landing from './components/Landing';
import About from './components/About';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Account from './components/Account';

import {getSignIn} from './actions/users';

import ScrollToTop from './ScrollToTop';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {user: false}
  }

  componentDidMount = async ()=> {  
    const setUser = async user => {
      this.setState({user});
    }
    const user = await getSignIn(setUser);
    if (user) {
      setUser(user);
    }
  }


  render() {
    return (
      <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
        <ScrollToTop>
          <Navbar />
          <Route exact path="/" component={ Landing } />
          <Route exact path="/about" component={ About } />
          <Route exact path="/reviews" component={ Reviews } />
          <Route exact path="/contact" component={ Contact } />
          <Route exact path="/account" render={props => <Account {...props} user={this.state.user} />} />
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
