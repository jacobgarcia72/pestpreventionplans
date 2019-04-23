import React, {Component} from 'react';

import {signInWithGoogle, signOut} from '../actions/users';
import {createNewClient} from '../actions/clients';

import Splash from './Splash';
import ContactForm from './ContactForm';


const screens = {
  financials: 'financials',
  message: 'message',
  newClient: 'new-client',
  newClientId: 'new-client-id',
  viewClient: 'view-client'
}

export default class Account extends Component {


  constructor(props) {
    super(props);
    this.state = {
      screen: null,
      client: null
    }
  }



  renderFinancialsScreen = ()=> {

    const createTable = type => { /* 'invoices' || 'payments' */
  
      const arr = [{date: '06/14/2018', id: 495205, total: 214.89, paid: 214.89, pdf: '#'}];

      const rows = arr.map((entry, i)=>{
        return (
          <div key={i} className="tr">
            <div>{entry.date}</div>
            <div>{entry.id}</div>
            <div>{entry.total}</div>
            <div>{entry.paid}</div>
            <div>{entry.total - entry.paid}</div>
            <div><a href={entry.pdf} rel="noopener noreferrer" target="_blank">View</a></div>
          </div>
        )
      });
  
      return (
        <div className="section">
          <div className="header">
            {type==='invoices' ? 'Invoices' : 'Payments'}
          </div>
          <div className="table">
            <div className="th">
              <div>Date</div>
              <div>{type==='invoices' ? 'Invoice' : 'Confirmation'} Number</div>
              <div>Total</div>
              <div>Paid</div>
              <div>Balance</div>
              <div>PDF</div>
            </div>
  
            {rows}
  
          </div>
        </div>
      )
    }

    const isAdmin = this.props.user.id === "admin";
    const backScreen = isAdmin ? screens.viewClient : null;
    return (
      <div className="page-content">
      
        <div className="section"> 
          Current Balance: $1000
        </div>
        <div className="btn">
          Make Payment
        </div>
        {createTable('invoices')}
        {createTable('payments')}
        <div className="btn" onClick={()=>this.setState({screen: backScreen})}>
          Back
        </div>

      </div>
    )
  }

  renderWelcomeScreen = ()=> {
    return (
      <div className="page-content">
      
        <div className="section"> 
          
          <div className="header">Welcome, {this.props.user.name}!</div>
          <div className="btn" onClick={()=>this.setState({screen: screens.financials})}>
            Manage Payments
          </div>
          <div className="btn" onClick={()=>this.setState({screen: null})}>
            Upcoming Services
          </div>
          <div className="btn" onClick={()=>this.setState({screen: screens.message})}>
            Request Service
          </div>
          <div className="link" onClick={signOut}>
            Sign Out
          </div>

        </div>
      </div>
    )
  }

  renderMessageScreen = ()=> {
    const {name, email, phone} = this.props.user;
    return (
      <div className="page-content">
        <ContactForm caption={'Send message'} name={name} email={email} phone={phone} signedIn={true} />
        <div className="btn" onClick={()=>this.setState({screen: null})}>
          Back
        </div>
      </div>
    )
  }

  renderAdminPage = ()=> {
    return <div className="page-content">
    
      <div className="section"> 
        <div className="header">Welcome, {this.props.user.name}!</div>
        <div className="btn" onClick={()=>this.setState({screen: null})}>
          Scheduling
        </div>
        <div className="btn" onClick={()=>this.setState({screen: null})}>
          Client Lookup
        </div>
        <div className="btn" onClick={()=>this.setState({screen: screens.newClient})}>
          New Client Account
        </div>
        <div className="link" onClick={signOut}>
          Sign Out
        </div>
      </div>
    </div>
  }

  renderNewClientPage = ()=> {

    const saveAsNewClient =e=> {
      e.preventDefault();
      const fName = document.getElementById('input-fname').value;
      const lName = document.getElementById('input-lname').value;
      const email = document.getElementById('input-email').value;
      const phone = document.getElementById('input-phone').value;
      const client = {fName, lName, email, phone};
      createNewClient(client, client=>this.setState({client}));
      this.setState({screen:screens.newClientId, client: null});
    }

    let content;
    const {screen} = this.state;

    if (screen===screens.newClient) {
      content = <form autoComplete="off" onSubmit={saveAsNewClient}>
        <input id="input-fname" placeholder="First name*" />
        <input id="input-lname" placeholder="Last name*" />
        <input id="input-email" placeholder="Email address*" />
        <input id="input-phone" placeholder="Phone number" />
        <button className="btn btn-action" type="submit">Submit</button>
      </form>
    } else {
      const {client} = this.state;
      if (client) {
        content = <div className="column">
          <div className="header">New client created successfully.</div>
          <div className="header">ID:&nbsp;{this.state.client.id}</div>
          <div className="btn" onClick={()=>this.setState({screen: screens.viewClient})}>View</div>
        </div>
      } else if (client===false) {
        content = <div>Error. Try Again.</div>
      } else {
        content = <div>Loading...</div>
      }
    }

    return <div className="page-content">
    
      <div className="section"> 
        <div className="header">New Client</div>

          {content}

        <div className="btn" onClick={()=>this.setState({screen: null})}>
          Back
        </div>
      </div>
    </div>
  }

  renderViewClientScreen = ()=> {
    const {client} = this.state;
    return <div className="page-content">
    
      <div className="section"> 
        <div className="header">{client.fName + ' ' + client.lName}</div>
        <div className="header">{client.id}</div>
        <div className="header">Balance: ${client.balance}</div>
        <div className="header">Lifetime Revenue: ${client.lifetimeRevenue}</div>

        <div className="double-wide">
          <div className="btn" onClick={()=>this.setState({screen: null})}>
            Record Payment
          </div>
          <div className="btn" onClick={()=>this.setState({screen: null})}>
            Make Payment
          </div>
          <div className="btn" onClick={()=>this.setState({screen: null})}>
            Create Invoice
          </div>
          <div className="btn" onClick={()=>this.setState({screen: null})}>
            Set Appointment
          </div>
          <div className="btn" onClick={()=>this.setState({screen: screens.financials})}>
            View Financials
          </div>
          <div className="btn" onClick={()=>this.setState({screen: null})}>
            View Appointments
          </div>
        </div>
        <div className="btn" onClick={()=>this.setState({screen: null})}>
          Back
        </div>
      </div>
    </div>
  }
 
  renderContent = signedIn => {
    if (signedIn && this.props.user.id === "admin") {

      let content;
      const {screen} = this.state;
      if (screen===screens.newClient || screen===screens.newClientId) {
        content = this.renderNewClientPage();
      } else if (screen===screens.financials) {
        content = this.renderFinancialsScreen();
      } else if (screen===screens.viewClient) {
        content = this.renderViewClientScreen();
      } else {
        content = this.renderAdminPage();
      }

      return (
        <div>
          <Splash src="bg5" caption={'Admin'} />
          {content}
        </div>
      )

    } else if (signedIn) {

      let content;
      const {screen} = this.state;
      if (screen===screens.financials) {
        content = this.renderFinancialsScreen();
      } else if (screen===screens.message) {
        content = this.renderMessageScreen();
      } else {
        content = this.renderWelcomeScreen();
      }

      return (
        <div>
          <Splash src="bg5" caption={'Account'} />
          {content}
        </div>
      )
    } else {
      return (
        <Splash src="bg5" large={true}>
          <div className="h1">
            Account
          </div>
          <div className="h2">
            Sign in to manage your account and make payments online.
          </div>
          <div id="google-sign-in" className="sign-in" onClick={signInWithGoogle}>
            <img alt="Sign in with Google" src="assets/google.png" />
          </div>
        </Splash>
      )
    }
  }

  render() {

    let content;
    const {user} = this.props;
    if (user===false) {
      content = <Splash src="bg5" large={true}>
        <div className="h1">
          Loading...
        </div>
      </Splash>
    } else if (user) {
      content = this.renderContent(true);
    } else {
      content = this.renderContent(false);
    }
    return (
      <div className="Account">
        {content}
      </div>
    )
  }
}