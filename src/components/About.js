import React from 'react';
import {Link} from 'react-router-dom';

import Splash from './Splash';

export default ()=> (
  <div className="About">

    <Splash src="bg2" caption="About" />

    <div className="page-content">
      <div className="section">
        <p>
          "I chose to work in this industry because I love working with clients and solving their pest control issues. I have had an interest in entomology, zoology, and biology since I was a child and I love meeting new people. I enjoy working in a field that allows me to use my knowledge and talents on a daily basis to help homes and businesses to be pest free."
        </p>
        <p>Brandon Garcia, Owner</p>
      </div>
      <Link to="/reviews" className="btn">Reviews</Link>
    </div>
  </div>
)