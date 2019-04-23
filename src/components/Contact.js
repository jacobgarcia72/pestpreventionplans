import React from 'react';

import Splash from './Splash';
import ContactForm from './ContactForm';

export default ()=> (
  <div className="Contact">
    <Splash src="bg4" caption="Contact" />
    <div className="page-content">

      <ContactForm caption={'Request a free quote'} />
      
      <div className="section"> 
        <div className="header">Connect:</div>

        <div className="connect">
          <a id="facebook" href="https://www.facebook.com/pestpreventionplans/"  rel="noopener noreferrer" target="_blank">
            <i className="fab fa-facebook-square"></i>
          </a>
          <a id="messenger" href="http://m.me/pestpreventionplans"  rel="noopener noreferrer" target="_blank">
            <i className="fab fa-facebook-messenger"></i>
          </a>
          <a id="yelp" href="https://www.yelp.com/biz/pest-prevention-plans-austin"  rel="noopener noreferrer" target="_blank">
            <i className="fab fa-yelp"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
)