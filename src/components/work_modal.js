import React from 'react';
import PropTypes from 'prop-types';
import tracking from '../assets/tracking';

const createArray = num => {
  let arr = [];
  for (var i = 1; i <= num; i++) {
    arr.push(`0${i}`);
  }
  return arr;
};

class WorkModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="flex-parent h-full w-full flex-parent--column flex-parent--center-cross">
        <button
          className="cursor-pointer top left absolute mx12 my12 bg-white"
          onClick={this.props.handleShowModal}
        >
          <svg className="icon fixed bg-white">
            <use xlinkHref="#icon-close" />
          </svg>
        </button>

        <div className="ml12 mt12 txt-generic max-description-size">
          <span className="txt-title">
            {this.props.showModal && tracking[this.props.showModal].title}
          </span>
          <br />
          {this.props.showModal &&
            tracking[this.props.showModal].description.map((paragraph, i) => (
              <div key={i}>{paragraph}</div>
            ))}
        </div>

        <div>
          {this.props.showModal &&
            createArray(tracking[this.props.showModal].num).map(num =>
            { const title = tracking[this.props.showModal];
              return title.mp4 === num ? (
                <div className="border my12" key={num}>
                  <video controls>
                    <source
                      src={require(`../assets/images/${this.props.showModal}/${num}.mp4`)}
                      type="video/mp4"
                    />
                    Your browser does not support HTML5 video.
                  </video>
                </div>
              ) : (
                <div className="my12 w-full flex-parent flex-parent--column flex-parent--center-cross" key={num}>
                <div className={`${this.props.showModal !== 'selene' && 'border'}`}>
                  <img
                    className='hmax600'
                    src={require(`../assets/images/${this.props.showModal}/${num}${title.gif === num ? '.gif' : '.jpg'}`)}
                  />
                  </div>
                </div>
              )
            
            }
            )}
        </div>
      </div>
    );
  }
}

WorkModal.PropTypes = {
  handleShowModal: PropTypes.func,
  showModal: PropTypes.string
};

export default WorkModal;
