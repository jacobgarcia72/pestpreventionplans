import React from 'react';

import Splash from './Splash';

export default ()=> (
  <div className="Contact">
    <Splash src="bg4" caption="Contact" />
    <div className="page-content">
      <div className="section"> 
        <div className="header">Request a free quote:</div>
        <form method="POST" action="https://formspree.io/PestPreventionPlans@gmail.com">
          <input type="name" name="name" placeholder="Your name*" />
          <input type="email" name="email" placeholder="Your email address*" />
          <input type="phone" name="phone" placeholder="Your phone number" />
          <textarea name="message" placeholder="Message" rows="6"></textarea>
          <button className="btn btn-action" type="submit">Submit</button>
        </form>
        <div className="disclaimer">By pressing Submit, you agree to be contacted by Pest Prevention Plans during business hours in response to your message. This will not add you to any mailing lists.</div>
      </div>
      
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