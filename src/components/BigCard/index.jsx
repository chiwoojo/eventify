/**
 * Big card component for individual event cards for
 * landing page and the Dashboard.
 *
 * TODO: WIP march 24
 */

// React
import React from 'react';

// MomentJS
import moment from 'moment';

// Material UI Components
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';
import ProgressBar from '../../helpers/progressBar';

// Styles
const cardStyles = {
  base: {
    height: '500px',
  },
  title: {
    height: '115px',
  },

  /**
   * Creates a style for picture element of the card
   * @param {string} url - url of the image
   * @returns {obj} styles object
   */
  pic: function picCardStyles(url) {
    return {
      height: '250px',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundImage: `url(${url})`,
      cursor: 'pointer',
    };
  },
};

class BigCard extends React.Component {
  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
  }

  /**
   * When user clicks on the image on the card,
   * 1) prevent refresh of the page
   * 2) run the onClick handler passed
   * down from the parent
   * @param e - event
   */
  clickHandler(e) {
    const { onClick } = this.props;
    e.preventDefault();
    onClick();
  }

  render() {
    const { onClick } = this.props;
    const { event } = this.props;
    const {
      image_url: imageUrl,
      event_name: eventName,
      event_address_label: eventAddress,
      event_date: eventDate,
      num_of_people_joined: numJoined,
      total_number_of_people_req: numRequired,
    } = event;
    const formattedDate = (
      <p>
        { moment(eventDate).format('dddd, MMM Do YYYY, hh:mm a') }
      </p>
    );
    const eventTimeFromNow = moment(eventDate).fromNow();

    return (
      <div className="col s12 m6 l4 feat-cards">
        <Card style={cardStyles.base}>
          <CardMedia>
            <div
              style={cardStyles.pic(imageUrl)}
              onClick={this.clickHandler}
            >
            </div>
          </CardMedia>
          <CardTitle
            style={cardStyles.title}
            title={eventName}
            subtitle={eventAddress || 'No address specified'}
          />
          <CardText>
            {
              eventDate ?
                formattedDate
                :
                <p>No date specified, please ask organizer</p>
            }
            <p>Attendees: { numJoined || 0 } / { numRequired }</p>
            <ProgressBar data={event} />
            <div>This event is {eventTimeFromNow}</div>
          </CardText>
          <CardActions>
            <FlatButton
              label="More info"
              onClick={onClick}
            />
          </CardActions>
        </Card>
      </div>
    );
  }
}

BigCard.propTypes = {
  event: React.PropTypes.object,
  onClick: React.PropTypes.func,
};

export default BigCard;
