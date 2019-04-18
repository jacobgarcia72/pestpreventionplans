import React from 'react';

var dt = new Date();

export default () => (
  <div className="Footer">

    <div className="contact">
      <a href="tel:512.675.0046"> 
        <p>(512) 675-0046</p>
      </a>
      <a href="mailto:PestPreventionPlans@gmail.com">
        <div>PestPreventionPlans@gmail.com</div>
      </a>
    </div>

    <div className="copyright">
      <div>© {dt.getYear()+1900} Pest Prevention Plans, LLC.</div>
      <div>&nbsp;All rights reserved.</div>
    </div>
  </div>
)

