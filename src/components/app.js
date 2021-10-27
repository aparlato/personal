import React from 'react';
import About from './about';
import Work from './work';
import Menu from './menu';
import ReactModal from 'react-modal';
import WorkModal from './work_modal';

import * as Scroll from 'react-scroll';
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from 'react-scroll';

ReactModal.setAppElement('#app');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: null,
      scrollY: 0
    };
    this.handleShowModal = this.handleShowModal.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    this.setState({
      scrollY: window.scrollY
    });
  }

  handleShowModal(projId) {
    this.setState({ showModal: this.state.showModal !== null ? null : projId });
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  render() {
    return (
      <div className="h-full w-full flex-parent flex-parent--column">
        <div className="mt60 viewport-full limiter flex-parent flex-parent--column color-black">
          <div className="w-full h-full title">
            <div className="mt-neg24 txt-display fixed z-neg1">
              alexander parlato is a designer / developer
            </div>
          </div>
          <Menu />
        </div>
        <div>
          <div className="w-full viewport-twothirds" />
          <Element name="projects">
            <Work
              scroll={!(this.state.scrollY < 50)}
              handleShowModal={this.handleShowModal}
            />
          </Element>
        </div>
        <div>
          <Element name="contact">
            <About />
          </Element>
        </div>

        <div className="bg-pink">
          <ReactModal
            isOpen={this.state.showModal !== null}
            contentLabel="Minimal Modal Example"
            onRequestClose={this.handleShowModal}
            shouldCloseOnOverlayClick={true}
          >
            <WorkModal
              handleShowModal={this.handleShowModal}
              showModal={this.state.showModal}
            />
          </ReactModal>
        </div>

        <a
          style={{ color: 'blue' }}
          className={`cursor-pointer txt-generic bottom right fixed mr12 mb12 px12 py12 bg-white border ${this
            .state.scrollY < 50 && 'none'}`}
          onClick={this.scrollToTop}
        >
          top
        </a>
      </div>
    );
  }
}

export default App;
