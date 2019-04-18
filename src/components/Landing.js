import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Landing extends Component {

  componentDidMount() {
    this.setTop();
    window.addEventListener('scroll', this.setTop);
    window.addEventListener('resize', this.setTop);
  }

  setTop = ()=> {
    let img = document.querySelector('.Landing .image');
    let whiteSpace = document.getElementById('white-space');
    if (!img) return;
    let height = 0;
    if (whiteSpace) height = parseInt(whiteSpace.style.height.concat(2));
    let top = height-Math.round(window.scrollY/2);
    img.style.top = `${top}px`;
  }

  render() {

    return (
      <div className="Landing">

        <div className="image"></div>

        <div className="cover">
          <div className="h1"><div>Protect Your</div><div>&nbsp;Home from Pests</div></div>
          <div className="h2"><div>Pest prevention plans that work for your home.</div><div>&nbsp;Guaranteed.</div></div>
          <Link to="/contact" className="btn btn-action">Request a Free Quote <i className="fas fa-angle-double-right"></i></Link>
        </div>

        <div className="content">

          <div className="section">Pest Prevention Plans, LLC services Austin and Central Texas.</div>
          <Link to="/about" className="btn">About</Link>

          <div className="section">
            <i className="fas fa-quote-left"></i>&nbsp;
            In half a week I've already seen the difference and we are super appreciative about that! Will keep up with maintenance and continue to go with Pest Prevention Plans!&nbsp;&nbsp;
            <i className="fas fa-quote-right"></i>
          </div>

          
          <Link to="/reviews" className="btn">Reviews</Link>

        </div>

      </div>
    )
  }
}