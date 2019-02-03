import React from 'react';
import PropTypes from 'prop-types';
import tracking from '../assets/tracking';

class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="flex-parent flex-parent--center-main flex-parent--center-cross flex-parent--column pt36">
          <div className={`w36 h36 ${this.props.scroll && 'none'}`}>
          <img src={require("../assets/arrow_02.svg")} />
          </div>
        {Object.keys(tracking).map(thumbnail => (
          <div
            key={thumbnail}
            className="thumbnail-height thumbnail-width my36 border cursor-pointer"
            onClick={() => this.props.handleShowModal(thumbnail)}
          >
            <img
              className="thumbnail-width"
              src={require(`../assets/images/thumbnails/${thumbnail}.jpg`)}
            />
          </div>
        ))}
      </div>
    );
  }
}

Work.PropTypes = {
  handleShowModal: PropTypes.func,
  scroll: PropTypes.bool
};

export default Work;
