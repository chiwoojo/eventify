/**
 * Top-level for Landing Page
 * Contains Navigation Bar, Banner, Search Box, and Featured Events, About the Team page
 * TODO: Refactor by integrating Redux
 */

// React
import React from 'react';

// Radium
import Radium from 'radium';

// Components
import FeatEvents from './FeatEvents';
import BannerImage from './BannerImage';
import GoogleMapsSearchBar from '../searchbar/GoogleMapsSearchBar';
import AboutUs from '../AboutUs/index';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  updateUserLocation,
  fetchEvents,
  auth,
  fetchOneEvent,
} from '../../redux/actions';

// Helpers
import Helpers from '../../helpers/helpers';

const style = {
  container: {
    height: '600px',
    position: 'relative',
    boxSizing: 'border-box',
    fontSize: '14px',
    lineHeight: '1.43',
    WebkitFontSmoothing: 'antialiased',
  },
  video: {
    bottom: '0',
    left: '0',
    overflow: 'hidden',
    position: 'absolute',
    right: '0',
    top: '0',
    boxSizing: 'border-box',
    display: 'block',
  },
  content: {
    height : '550px',
    paddingBottom : '104px',
    top: '50px',
    position: 'relative',
    zIndex: '2',
    width: 'auto',
    paddingLeft: '25px',
    paddingRight: '25px',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    boxSizing: 'border-box',
    display: 'block',
  },
  welcome: {
    width: '100%',
    height: '100%',
    display: 'table',
    position: 'relative',
    textAlign: 'center',
  },
  welcomeSign: {
    verticalAlign: 'middle',
    display: 'table-cell',
  },
  heroFoot: {
    bottom: '0',
    left: '0',
    paddingBottom: '30px',
    paddingTop: '30px',
    position: 'absolute',
    right: '0',
    textAlign: 'center',
  },
  arrow: {
    strokeWidth: '3',
  },
};

@Radium
class Landing extends React.Component {

  // Set initial State for this Component
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     //filteredEvents is used for Search box filtering
  //     filteredEvents: [],
  //     //when user is logged in
  //     isLoggedIn: false,
  //     location: {
  //       lat: 30,
  //       long: -90,
  //       address: 'New Orleans, LA',
  //     },
  //   };
  // }

  // fetch events right
  // before component mounts
  componentWillMount() {
    this.props.fetchEvents();
  }

  /**
   *
   *    When all the Components mount
   *
   *    1) Check to see if user is Authorized, if so set State to true
   *    2) Call init()
   *
   */
  // componentDidMount() {
  //   this.init();
  // }

  handleLocationSubmit(suggest) {
    this.setState({ location: {
      lat: suggest.location.lat,
      long: suggest.location.lng,
      address: suggest.label,
    }});
  }

  // /**
  //  *    Get data from backend about events
  //  */
  // init() {
  //   const that = this;
  //   Helpers.getEvents()
  //     .then( (data) => {
  //       console.log('data is ', data);
  //       that.setState({
  //         events: data.data,
  //         filteredEvents: data.data,
  //       });
  //     });
  // }



  /**
   *    Renders this Component with children of this Component
   *
   */
  render() {
    return (
      <div>
        <div className="row">
          <div style={style.container} className="hero" >
            <div className="hero__background" style={style.video}>
              <BannerImage />
            </div>
            <div style={style.content} className="hero__content page-container-full">
              <div style={style.welcome} className="va-container" >
                <div style={style.welcomeSign} className="va-middle" >
                  <h1 className="hero-header"> YOUR EVENTS, CROWDFUNDED! </h1>
                  <h4 className="hero-header-sub"> Browse upcoming events near you </h4>
                </div>
              </div>
              <div style={style.heroFoot} className="hero__content-footer" >
                <svg width="70" height="55" viewBox="-2.5 -5 75 60" preserveAspectRatio="none">
                  <path
                    style={style.arrow}
                    strokeWidth="6"
                    d="M0,0 l35,50 l35,-50"
                    fill="none"
                    stroke="white"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <GoogleMapsSearchBar
          initialValue="Search by Location"
          updateLocation={(d) => this.handleLocationSubmit(d)}
        />
        <div className="container" style={{marginTop: "7%"}}>
          <FeatEvents
            fetchOneEvent={this.props.fetchOneEvent}
            events={this.props.events}
            user={this.props.user}
            location={this.props.location}
          />
        </div>
        <AboutUs />
      </div>
    );
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchEvents,
    auth,
    updateUserLocation,
    fetchOneEvent,
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    events: state.events.all,
    isLoggedIn: state.user.isLoggedIn,
    event: state.events.event,
    user: state.user,
    location: state.user.loc,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
