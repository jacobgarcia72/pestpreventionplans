import React, {Component} from 'react';

import {updateUser} from '../actions/users'

export default class Form extends Component {

  constructor(props) {
    super(props);
    const {name, email, phone} = this.props;
    this.state={
      name, email, phone
    }
  }

  saveUserInfo = ()=> {
    if (!this.props.signedIn) return;
    const phone = document.getElementById('input-phone').value;
    const name = document.getElementById('input-name').value;
    updateUser({phone, name});
  }

  handleChange = e=> {
    this.setState({[e.target.name]: e.target.value})
  }

  render(){
    const {caption} = this.props;
    const {name, email, phone} = this.state;
    return (
      <div className="section"> 
        <div className="header">{caption}:</div>
        <form method="POST" action="https://formspree.io/PestPreventionPlans@gmail.com" onSubmit={this.saveUserInfo}>
          <input type="name" name="name" id="input-name" placeholder="Your name*" value={name} onChange={this.handleChange} />
          <input type="email" name="email" id="input-email" placeholder="Your email address*" value={email} onChange={this.handleChange} />
          <input type="phone" name="phone" id="input-phone" placeholder="Your phone number" value={phone} onChange={this.handleChange} />
          <textarea name="message" placeholder="Message" rows="6"></textarea>
          <button className="btn btn-action" type="submit">Submit</button>
        </form>
        <div className="disclaimer">By pressing Submit, you agree to be contacted by Pest Prevention Plans during business hours in response to your message. This will not add you to any mailing lists.</div>
      </div>
    )
  }
}