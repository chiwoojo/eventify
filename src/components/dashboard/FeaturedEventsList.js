/**
 *
 *    Joined Events Component.
 *
 */

// React
import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

//Components
import Slider from 'material-ui/lib/slider';
import MaterialUICard from '../BigCard/index';

import Helpers from '../../helpers/helpers';

export default class FeaturedEventsList extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  handleClick(event) {
    this.props.select(event.id)
      .then(() => { this.context.router.push('/event/' + event.id); });
  }

  updateRadius(miles) {
    this.props.updateRadius({payload: miles});
  }

  render() {
    return (
      <div>

        <div>
          <Slider
            description={`Filter events by distance: ${this.props.user.radius.miles} miles away from ${this.props.user.loc.address || 'Your Location'}`}
            defaultValue={this.props.user.radius.miles}
            step={1}
            min={1}
            max={100}
            onChange={(e, value) => {this.updateRadius(value); }}
            style={{width: '100%', padding: '1.2rem 0.75rem 0' }} />
        </div>


        <ReactCSSTransitionGroup transitionName='dash-feat-cards' transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          {this.props.data.sort( (a, b) => {
            const bdist = Helpers.distance(b.event_lat, b.event_long, this.props.user.loc.lat, this.props.user.loc.long);
            const adist =  Helpers.distance(a.event_lat, a.event_long, this.props.user.loc.lat, this.props.user.loc.long);
            if (adist > bdist) {
              return 1;
            }
            if (adist < bdist) {
              return -1;
            }
            return 0;
          } )
            //calculate distance of each event
            .filter((event) => {
              let dist = Helpers.distance(event.event_lat, event.event_long, this.props.user.loc.lat, this.props.user.loc.long);
              return dist < this.props.user.radius.miles;
            })
            .map((event, index) => (
              <MaterialUICard key={index} event={event} onClick={this.handleClick.bind(this, event)} />
            ))}

        </ReactCSSTransitionGroup>

      </div>

    );
  }

}
