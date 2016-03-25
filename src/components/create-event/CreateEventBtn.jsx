/**
 * 'Create Event' Button
 * --Optional--
 * @props {Boolean} this.props.menuItem
 * if the sign-up button is part of LeftNav,
 * return a MenuItem instead of FlatButton.
 */

// React
import React, { Component, PropTypes } from 'react';

// Material UI Components
import FlatButton from 'material-ui/lib/flat-button';
import MenuItem from 'material-ui/lib/menus/menu-item';

// Style
const style = {
  flatBtn: {
    color: '#53b3cb',
    border: '2px solid #53b3cb',
  },
  menuItem: {
    color: '#53b3cb',
  },
};

class CreateEventBtn extends Component {
  static contextTypes = {
    router: PropTypes.object,
  };

  constructor() {
    super();
    this.handleMenuItem = this.handleMenuItem.bind(this);
    this.goToCreate = this.goToCreate.bind(this);
  }

  // redirect to create event page
  goToCreate() {
    this.context.router.push('/create');
  }

  // closes the left nav
  // and redirects to
  // create event page
  handleMenuItem() {
    this.props.closeLeftNav();
    this.goToCreate();
  }

  render() {
    if (this.props.menuItem) {
      return (
        <MenuItem
          onTouchTap={this.handleMenuItem}
          style={style.menuItem}
        >
          Create Event
        </MenuItem>
      );
    }

    return (
      <FlatButton
        label = "Create Event"
        style = {style.flatBtn}
        onClick = {this.goToCreate}
      />
    );
  }
}

CreateEventBtn.propTypes = {
  menuItem: React.PropTypes.bool,
  closeLeftNav: React.PropTypes.function,
};

export default CreateEventBtn;
