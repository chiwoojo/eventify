/**
 *    Banner Image
 */

// React
import React from 'react';

const bannerStyle = {
  width: '2000px',
  bottom: '0',
  position: 'absolute',
  height: 'auto',
  display: 'inline-block',
  boxSizing: 'border-box',
  OObjectFit: 'fill',
}

class BannerImage extends React.Component {
  render() {
    return (
      <img
        src='../../assets/lights-party-dancing-music-resized.jpg'
        style={bannerStyle}
      />
    );
  }
}

export default BannerImage;
