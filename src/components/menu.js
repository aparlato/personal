import React from 'react';

import * as Scroll from 'react-scroll';
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from 'react-scroll';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="fixed mt3 txt-generic cursor-pointer menu">
        <Link to="projects" spy={true} smooth={true} offset={50} duration={500}>
          Projects
        </Link>
        <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
          About
        </Link>
        <a href={require("../assets/resume.pdf")} download>
          CV
        </a>
      </div>
    );
  }
}

export default Menu;
