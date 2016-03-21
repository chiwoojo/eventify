/**
 *
 *    Front Landing Page Banner
 *
 *    DEPRECATED
 *
 */
import Radium from 'radium';
import React from 'react';
import GoogleMapsSearchBar from '../searchbar/GoogleMapsSearchBar';

// Search box now deprecated. Will keep just in case though.
// <input type="text" placeholder='Search for events' id='search-box' onChange={this.props.filterList} />
//
const style = {
  backgroundColor: '#fff',
  paddingBottom: '50px',
  test: {
    '@media (maxWidth: 400px)': {
      color: 'red'
    }
  }
}

class Banner extends React.Component {

  render() {
    return (
      <div style={style}>
        <h1 className="hero-header">YOUR EVENTS, CROWDFUNDED</h1>
        <div style={style.test}> RED WHEN SMALL </div>
        <h4 className="hero-header">Browse upcoming events near you</h4>
        <GoogleMapsSearchBar />
      </div>
    );
  }
}

export default Radium(Banner);
