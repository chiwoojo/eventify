/**
 *
 *    Logout Button
 *
 *    --Required--
 *    @props {Func} logout
 *    Dispatches logout action to Redux
 *
 *    --Situational / Optional--
 *    @props {Boolean} menuItem
 *    if the sign-up button is part of LeftNav,
 *    return a MenuItem instead of FlatButton.
 *
 *    @props {Func} closeLeftNav
 *    closes the leftNav when it is open
 */

// React
import React, { Component, PropTypes } from 'react';

// Material UI Components
import MenuItem from 'material-ui/lib/menus/menu-item';
import FlatButton from 'material-ui/lib/flat-button';

const menuItemStyle = {
  color: '#53b3cb',
};

class LogoutBtn extends Component {
  static contextTypes = {
    router: PropTypes.object,
  };

  constructor() {
    super();
    this.handleLogout = this.handleLogout.bind(this);
    this.handleClickMenuBtn = this.handleClickMenuBtn.bind(this);
  }

  /**
   * Logs out the user by
   * 1) changing the Redux state
   * 2) pushing the user to the main page
   */
  handleLogout() {
    const { logout } = this.props;
    logout()
      .then(() => {
        this.context.router.push('/');
      });
  }

  /**
   * Closes the leftnav when clicked,
   * and also logs out the user.
   *
   * Only relevant when the leftNav is open.
   */
  handleClickMenuBtn() {
    this.props.closeLeftNav();
    this.handleLogout();
  }

  render() {
    if (this.props.menuItem) {
      return (
        <MenuItem onTouchTap={this.handleClickMenuBtn} style={menuItemStyle}>
          Log Out
        </MenuItem>
      );
    }

    return (
      <FlatButton
        label="Log Out"
        style={menuItemStyle}
        onClick={this.handleClickFlatBtn}
      />
    );
  }
}

LogoutBtn.propTypes = {
  logout: React.PropTypes.func.isRequired,
  closeLeftNav: React.PropTypes.func,
  menuItem: React.PropTypes.bool,
};

export default LogoutBtn;
