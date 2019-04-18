import React from 'react';

import Splash from './Splash';

export default ()=> (
  <div className="Account">
    <Splash src="bg5" large={true}>
      <div className="h1">
        Account
      </div>
      <div className="h2">
        Sign in to manage your account and make payments online.
      </div>
      <div id="google-sign-in" className="sign-in">
        <img alt="Sign in with Google" src="assets/google.png" />
      </div>
    </Splash>
  </div>
)