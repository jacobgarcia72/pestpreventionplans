import React from 'react';
import {Link} from 'react-router-dom';


import Splash from './Splash';

export default ()=> (
  <div className="Landing">

    <Splash src="bg" large={true}>
      <h1 className="h1"><div>Protect Your</div><div>&nbsp;Home from Pests</div></h1>
      <h2 className="h2"><div>Pest prevention plans that work for your home.</div><div>&nbsp;Guaranteed.</div></h2>
      <Link to="/contact" className="btn btn-action">Request a Free Quote <i className="fas fa-angle-double-right"></i></Link>
    </Splash>

    <div className="page-content">

      <div className="section">Pest Prevention Plans, LLC provides pest control services in Austin and Central Texas. We offer a wide range of services for your home or business.</div>
      <Link to="/about" className="btn">About</Link>

      <div className="section">
        <div>
          <i className="fas fa-quote-left"></i>&nbsp;In half a week I've already seen the difference and we are super appreciative about that! Will keep up with maintenance and continue to go with Pest Prevention Plans!&nbsp;<i className="fas fa-quote-right"></i>
        </div>
      </div>

      
      <Link to="/reviews" className="btn">Reviews</Link>

    </div>

  </div>
)
