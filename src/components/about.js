import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var headsNumber = [1];
    return (
      <div className="flex-parent flex-parent--center-main flex-parent--center-cross flex-parent--column mb120">
        <div className="thumbnail-width thumbnail-height bg-white px24 border">
          {headsNumber.map(del => (
            <div
              key={del}
              style={{
                background:
                  'url("../../css/sprites/melt_head_02.png") left center',
                animationDelay: `${0.1 * del}s`
              }}
              className="animation move-up-mobile"
            />
          ))}
          <div className="txt-generic bg-white mt-neg60">
            Alex Parlato is a <span className="txt-underline">designer</span>,{' '}
            <span className="txt-underline">developer</span>, and{' '}
            <span className="txt-underline">artist</span>.
            <br />
            Currently located in{' '}
            <span className="txt-underline">San Francisco, CA</span>.
            <br />
            Working on map design and frontend development at{' '}
            <a href="https://www.mapbox.com" className="txt-underline">
              Mapbox
            </a>
            .
            <br />
            Wanna chat or grab a coffee?
            <br />
            <a
              href="mailto:webmaster:aparlato.1@gmail.com"
              style={{ color: 'blue' }}
            >
              aparlato.1@gmail.com
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
