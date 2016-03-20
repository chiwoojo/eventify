/**
 * Meet the Team section of the landing page
 */

// React
import React from 'react';

const teamStyle = {
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
};

const nameStyle = {
  main: {
    fontSize: '3rem',
    fontWeight: '300',
    fontStyle: 'Thin',
    paddingBottom: '0',
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

const MeetTheTeam = function MeetTheTeam() {
  return (
    <div className="row">
      <div className="meet-the-team" style={teamStyle.wrap}>
        <h2 className="center-align" style={teamStyle.header}>
          Meet the Team
        </h2>
        <div className="row center-align">
          <div className="col s12 l3" style={teamStyle.base}>
            <img
              src="https://avatars3.githubusercontent.com/u/13400593?v=3&s=460"
              className="responsive-img"
              style={imageStyle}
            />
            <h2 style={nameStyle.base}> Vincent Jo </h2>
            <h5 style={nameStyle.sub}> Front End Engineer </h5>
          </div>
          <div className="col s12 l3" style={teamStyle.base}>
            <img
              src="https://avatars3.githubusercontent.com/u/9803285?v=3&s=460"
              className="responsive-img"
              style={imageStyle}
            />
            <h2 style={nameStyle.base}> Delphine Foo </h2>
            <h5 style={nameStyle.sub}> Full Stack Engineer | Product Owner </h5>
          </div>
          <div className="col s12 l3" style={teamStyle.base}>
            <img
              src="https://avatars3.githubusercontent.com/u/13316418?v=3&s=460"
              className="responsive-img"
              style={imageStyle}
            />
            <h2 style={nameStyle.base}> Kristen Haydel </h2>
            <h5 style={nameStyle.sub}> Full Stack Engineer | Scrum Master </h5>
          </div>
          <div className="col s12 l3" style={teamStyle.base}>
            <img
              src="https://avatars0.githubusercontent.com/u/10159831?v=3&s=460"
              className="responsive-img"
              style={imageStyle}
            />
            <h2 style={nameStyle.base}> Oleg Umarov </h2>
            <h5 style={nameStyle.sub}> Full Stack Engineer </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
