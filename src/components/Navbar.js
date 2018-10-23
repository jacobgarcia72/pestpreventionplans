import React from 'react';
import {Link} from 'react-router-dom';

export default () => (
  <div className="Navbar">
    <div className="content">
      <div className="home">
        <Link to="/">Pest Prevention Plans</Link>
      </div>
      <div className="links">
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  </div>
)


