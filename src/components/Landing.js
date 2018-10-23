import React from 'react';
import {Link} from 'react-router-dom';

export default () =>  (
  <div className="Landing">
    <div className="image">
      <div className="cover">
        <h1>Protect Your Home from Pests</h1>
        <h2>Pest prevention plans that make sense for your family.</h2>
        <Link to="/request" className="btn btn-action">Request Quote</Link>
      </div>
    </div>
  </div>
)