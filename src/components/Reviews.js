import React from 'react';
import {Link} from 'react-router-dom';

import Splash from './Splash';

export default ()=> (
  <div className="Reviews">

    <Splash src="bg3" caption="Reviews" />


    <div className="page-content">
      <div className="section">
        <p className="review">
          &ldquo;Brandon was super polite and went through my apartment throughly as well as my back yard. He explained to me what he found and also has a 30 day guarantee.  My apartment complex refuses to spray because I work from home. I found Brandon's rates the most affordable and the service amazing! I will update in a month to report results from the pest.<br /><br />Oh and he was super responses to my initial inquiry. I had a response within 5 minutes and he worked with my scheduled.&rdquo;
        </p>
        <div className="reviewer">
          Emie S.
        </div>
        <p className="review">
          &ldquo;Very fast response time- was able to communicate back and forth through the Yelp messaging app. After I put in a request for more information - the owner, Brandon was in contact almost immediately and was available to come by our house and check out the situation SAME DAY! Then he scheduled the actual service the next day! Super handy when it comes to getting rid of Pests that no body wants around! 
          <br /><br />
          In half a week I've already seen the difference and we are super appreciative about that! Will keep up with maintenance and continue to go with Pest Prevention Plans! Reasonable / Competitive pricing.&rdquo;
        </p>
        <div className="reviewer">
          Jenna H.
        </div>
        <p className="review">
          &ldquo;We had a flea infestation because we left to visit family for two weeks, and our pets had just gotten fleas, so they bred and when we got back two weeks later it was extremely bad. The guy was able to give us a consultation that same day within an hour, and treated the apartment the very next day. So far its been a few days and we have yet to see another flea in the house or on our pets. He did a great job, was extremely prompt with his responses and for both the consultation and the treatment he showed up at exactly the time he said he would. He helped make a very bad experience a lot better, and I'm glad to give him his first review on here because he deserves it&rdquo;
        </p>
        <div className="reviewer">
          Moses C.
        </div>
      </div>

      <div className="header">
          More Reviews:
        </div>
      <div className="connect">
          <a id="facebook" href="https://www.facebook.com/pestpreventionplans/reviews"  rel="noopener noreferrer" target="_blank">
            <i className="fab fa-facebook-square"></i>
          </a>
          <a id="yelp" href="https://www.yelp.com/biz/pest-prevention-plans-austin"  rel="noopener noreferrer" target="_blank">
            <i className="fab fa-yelp"></i>
          </a>
        </div>

      <Link to="/contact" className="btn btn-action">Request a Free Quote <i className="fas fa-angle-double-right"></i></Link>
    </div>
  </div>
)