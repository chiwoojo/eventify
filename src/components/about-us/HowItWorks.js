// React
import React from 'react';

const howItStyles = {
  base: {
    padding: '25px',
  },
  wrap: {
    width: '90%',
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingLeft: '15px',
    paddingRight: '15px',
    textAlign: 'center',
  },
  header: {
    paddingTop: '100px',
    paddingBottom: '40px',
    color: 'rgba(36, 63, 115, 0.91)',
  },
};

const imageStyle = {
  borderRadius: '7px',
  paddingBottom: '20px',
  paddingTop: '10px',
};

const nameStyle = {
  main: {
    fontSize: '3rem',
    fontWeight: '300',
    fontStyle: 'Thin',
    paddingBottom: '10px',
    marginBottom: '0',
    marginTop: '5px',
    color: '#454545',
  },
  sub: {
    marginTop: '10px',
    fontSize: '1rem',
    fontWeight: '500',
    color: '#454545',
  },
};

const HowItWorks = function HowItWorks() {
  return (
    <div className="row">
      <div className="meet-the-team" style={howItStyles.wrap}>
        <h2 className="center-align" style={howItStyles.header}>
          How It Works!
        </h2>
        <div className="row center-align">
          <div className="col l12" style={howItStyles.base}>
            <h2 style={nameStyle.main}> 1. Sign Up with Facebook! </h2>
            <img src="https://eventify-photos.s3.amazonaws.com/Screen Shot 2016-02-08 at 4.01.38 PM.jpg" className="responsive-img" style={imageStyle} />
          </div>
          <div className="col l12" style={howItStyles.base}>
            <h2 style={nameStyle.main}> 2. Create an event! </h2>
            <img src="https://eventify-photos.s3.amazonaws.com/Screen Shot 2016-02-10 at 3.39.00 PM.jpg" className="responsive-img" style={imageStyle} />
          </div>
          <div className="col l12" style={howItStyles.base}>
            <h2 style={nameStyle.main}> 3. Filter By Location! </h2>
            <img src="https://eventify-photos.s3.amazonaws.com/Screen Shot 2016-02-10 at 3.38.27 PM.jpg" className="responsive-img" style={imageStyle} />
          </div>
          <div className="col l12" style={howItStyles.base}>
            <h2 style={nameStyle.main}> 4. Join an event! </h2>
            <img src="https://eventify-photos.s3.amazonaws.com/Screen Shot 2016-02-10 at 3.16.55 PM.jpg" className="responsive-img" style={imageStyle} />
          </div>
          <div className="col l12" style={howItStyles.base}>
            <h2 style={nameStyle.main}> 5. Pay for an event </h2>
            <img src="https://eventify-photos.s3.amazonaws.com/Screen Shot 2016-02-10 at 3.16.34 PM.jpg" className="responsive-img" style={imageStyle} />
          </div>
          <div className="col l12" style={howItStyles.base}>
            <h2 style={nameStyle.main}> 6. Share on Facebook for your friends to join! </h2>
            <img src="https://eventify-photos.s3.amazonaws.com/Screen Shot 2016-02-10 at 3.18.56 PM.jpg" className="responsive-img" style={imageStyle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
