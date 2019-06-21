import React from 'react';
import {Link} from 'react-router-dom';

import Splash from './Splash';

export default class Reviews extends React.Component {

  constructor(props) {
    super(props);
    this.state={currentSlide: 0}
  }

  componentDidMount() {
    this.resetSlides(0);
    this.handleYelpCode();
  }

  handleYelpCode =()=>{
    (function(d, t) {var g = d.createElement(t);var s = d.getElementsByTagName(t)[0];g.id = "yelp-biz-badge-script-rrc-6JkeIyQ2CbCXluFyyQXuIg";g.src = "//yelp.com/biz_badge_js/en_US/rrc/6JkeIyQ2CbCXluFyyQXuIg.js";s.parentNode.insertBefore(g, s);}(document, 'script'));
  }

  resetSlides = currentSlide => {
    for (let i=0; i<3; i++) {
      let slide = document.getElementById('slide-'+i);
      if (!slide) return;
      slide.style.opacity = i===currentSlide ? 1 : 0;
      slide.style.zIndex = slide.style.opacity;
      slide.classList.remove('fade-in');
      slide.classList.remove('fade-out');
    }
  }

  handleChangeSlide = rightArrowClicked=> {
    
    const animateSlide = (slideIndex, fadeIn) => {
      let slide = document.getElementById('slide-' + slideIndex);
      if (slide) {
        let fade = fadeIn ? 'fade-in' : 'fade-out';
        slide.classList.add(fade);
        slide.addEventListener('animationend', ()=> {
          if (slide) {
            slide.classList.remove(fade);
            slide.style.opacity = fadeIn ? 1 : 0;
            slide.style.zIndex = slide.style.opacity;
          }
        });
      }
    }


    let {currentSlide} = this.state;
    this.resetSlides(currentSlide);

    animateSlide(currentSlide, false);
    if (rightArrowClicked) {
      currentSlide++;
      if (currentSlide>2) currentSlide=0;
    } else {
      currentSlide--;
      if (currentSlide<0) currentSlide=2;
    }
    animateSlide(currentSlide, true);
    
    this.setState({currentSlide});
  }

  render() {

    return  (
      <div className="Reviews">
    
        <Splash src="bg3" caption="Reviews" />
    
    
        <div className="page-content">
          <div className="carousel">

            <div className="left">

              <div className="arrow" id="arrow-left" onClick={()=>this.handleChangeSlide(false)}><i className="fas fa-chevron-circle-left"></i></div>

            </div>

            <div className="center">
    
              <div id="slide-0" className="slide">
                <div className="slide-content" id="home-adviser">

                  <a href="https://www.homeadvisor.com/rated.PestPreventionPlansLLC.79551165.html"><h1>Home Advisor</h1></a>

                  <div className="row awards">

                    <a rel="noopener noreferrer" target="_blank" href="https://www.homeadvisor.com/c.Pest-Control.Austin.TX.-12057.html#spid=79551165" style={{display: "block", margin: "0 auto"}}><img alt="Top Rated Business by HomeAdvisor" style={{display:"block"}} src={"https://www.homeadvisor.com/images/sp-badges/toprated-solid-border.png?sp=79551165&key=b299f2f981ce0adfe41e33d5b381bb9e"} /></a>
                    
                    <a rel="noopener noreferrer" target="_blank" href="https://www.homeadvisor.com/c.Pest-Control.Austin.TX.-12057.html#spid=79551165" style={{display: "block", margin: "0 auto"}}><img alt="HomeAdvisor Elite Service Pro - Pest Prevention Plans, LLC" style={{display:"block"}} src={"https://www.homeadvisor.com/images/sp-badges/elite-solid-border.png?sp=79551165&key=b299f2f981ce0adfe41e33d5b381bb9e"} /></a>

                    <a  rel="noopener noreferrer" target="_blank" href="https://www.homeadvisor.com/rated.PestPreventionPlansLLC.79551165.html" style={{display: "block", margin: "0 auto"}}><img alt={"Pest Prevention Plans, LLC is a Screened & Approved HomeAdvisor Pro"} style={{display:"block"}} src={"http://www.homeadvisor.com/images/sp-badges/soap-solid-border.png?sp=79551165&key=b299f2f981ce0adfe41e33d5b381bb9e"} /></a>

                  </div>


                  <p>"Called immediately and followed through. Very thorough. Even came early and spent time answering my questions. Will call again."</p>

                  <div className="row ratings">
                    <div>Quality: 5.0</div>
                    <div>Customer Service: 5.0</div>
                    <div>Value for Money: 5.0</div>	
                  </div>

                  <div className="reviewer">Kathleen B.</div>

                </div>
              </div>

              <div id="slide-1" className="slide">
                <div className="slide-content" id="facebook">

                  <a href="https://www.facebook.com/pestpreventionplans/"><h1>Facebook</h1></a>
                  
                  <div className="facebook-link connect row">
                    <a id="facebook" href="https://www.facebook.com/pestpreventionplans/"  rel="noopener noreferrer" target="_blank">
                    <i className="fab fa-facebook-square"></i><div className="url">/PestPreventionPlansLLC</div>
                    </a>
                  </div>

                  <div className="fb-page" data-href="https://www.facebook.com/pestpreventionplans" data-tabs="" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/pestpreventionplans" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/pestpreventionplans">Pest Prevention Plans LLC</a></blockquote></div>
                  
                  <p>"Brandon Garcia came and sprayed our home. We were having problems with small cockroaches. He was very professional and got the job done quickly and efficiently. I would highly recommend Brandon to anyone with a pest problem."</p>
                
                  <div className="reviewer">Fay M.</div>


                </div>
              </div>

              <div id="slide-2" className="slide">
                <div className="slide-content" id="yelp">

                  <a href="https://www.yelp.com/biz/pest-prevention-plans-austin"><h1>Yelp</h1></a> 

                  <div className="yelp-badge" id="yelp-biz-badge-rrc-6JkeIyQ2CbCXluFyyQXuIg"><a  rel="noopener noreferrer" target="_blank" href="http://yelp.com/biz/pest-prevention-plans-austin?utm_medium=badge_star_rating_reviews&amp;utm_source=biz_review_badge">Check out Pest Prevention Plans on Yelp</a></div>
                  
                  <p id="first-p">"Very fast response time<span className="hide-text">- was able to communicate back and forth through the Yelp messaging app</span>.<span className="hide-text"> After I put in a request for more information - the owner,</span> Brandon was in contact almost immediately and was available to come by our house and check out the situation SAME DAY! <span className="hide-more-text">Then he scheduled the actual service the next day! Super handy when it comes to getting rid of Pests that no body wants around!</span></p>

                  <p>"In half a week I've already seen the difference and we are super appreciative about that! Will keep up with maintenance and continue to go with Pest Prevention Plans! Reasonable / Competitive pricing."</p>

                  <div className="reviewer">Jenna H.</div>


                </div>
              </div>

            </div>

            <div className="right">

              <div className="arrow" id="arrow-right" onClick={()=>this.handleChangeSlide(true)}><i className="fas fa-chevron-circle-right"></i></div>

            </div>
    
          </div>
    
          <Link to="/contact" className="btn btn-action">Request a Free Quote <i className="fas fa-angle-double-right"></i></Link>
        </div>
      </div>
    )
  }
} 