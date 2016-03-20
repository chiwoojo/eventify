/**
 *   Tech Stack section of landing-page
 *   **Hides when the viewport gets to be small**
 */

// React
import React from 'react';

// Tech Stack Data
import { TechStackInfo } from './TechStackData';

const teamStyle = {
  base: {
    padding: '25px',
    height: '170px',
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

const backgroundClr = {
  backgroundColor: '#f2f2f2',
};

const TechStack = function TechStack() {
  return (
    <div className="row hide-on-small-only" style={backgroundClr}>
      <div style={teamStyle.wrap}>
        <h2 className="center-align" style={teamStyle.header}>
          Tech Stack
        </h2>
          <div className="row center-align">
            <div className="row first-row-tech">
              {/*
                grabs an array of props names from TechStackInfo,
                then maps over them to display each images of those
                tech stacks.
              */}
              {
                Object.getOwnPropertyNames(TechStackInfo).map((tech, index) =>
                    <div key={index} className="col s6 m4 l3" style={teamStyle.base}>
                      <img
                        src={TechStackInfo[tech].img}
                        style={imageStyle}
                        className="responsive-img"
                      />
                    </div>
                )
              }
            </div>
          </div>
      </div>
    </div>
  );
};

export default TechStack;
