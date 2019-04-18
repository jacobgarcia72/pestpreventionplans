import React, {Component} from 'react';

export default class Splash extends Component {

  componentDidMount() {
    this.setTop();
    window.addEventListener('scroll', this.setTop);
    window.addEventListener('resize', this.setTop);
  }

  setTop = ()=> {
    let img = document.querySelector('.Splash .image');
    let whiteSpace = document.getElementById('white-space');
    if (!img) return;
    let height = 0;
    if (whiteSpace) height = parseInt(whiteSpace.style.height.concat(2));
    let top = height-Math.round(window.scrollY/2);
    img.style.top = `${top}px`;
  }

  render() {
    let className = 'Splash';
    if (this.props.large) className += ' large';
    const content = this.props.caption ? <div className="caption">{this.props.caption}</div> : this.props.children;
    return (
      <div className={className}>
        <div className="image" style={{'backgroundImage': `url("../assets/${this.props.src}.jpg")`}}></div>
        <div className="cover">
          {content}
        </div>
      </div>
    )
  }
}