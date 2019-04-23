import React, {Component} from 'react';

import Splash from './Splash';

export default class Account extends Component {


  render() {
    return (
      <div className="Account">
        <Splash src="bg5" caption="Account" />
        <div className="page-content">
          <iframe src="https://portal.gorilladesk.com/pestpreventionplans" title="portal" />
        </div>
      </div>
    )
  }
}