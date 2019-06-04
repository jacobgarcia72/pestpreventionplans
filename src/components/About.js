import React from 'react';
import {Link} from 'react-router-dom';

import Splash from './Splash';

export default ()=> (
  <div className="About">

    <Splash src="bg2" caption="About" />

    <div className="page-content">
      <div className="section">
        <p>
          "My first job doing pest control was just a summer job, but since then it has sort of stuck with me. I enjoy meeting with people each day and helping to solve their pest control needs. I feel like this is a job that really plays to my strengths and interests because even as a child I was interested in entomology and zoology, and I love how this is a job that allows me to travel and interact with people daily."
        </p>
      </div>
      <Link to="/reviews" className="btn">Reviews</Link>
    </div>
  </div>
)