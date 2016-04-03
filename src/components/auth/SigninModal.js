/**
 *    Sign-in Modal (pop out when you click on 'signin')
 *
 *    --Optional--
 *    @props {Boolean} this.props.menuItem
 *    if the sign-up button is part of LeftNav,
 *    return a MenuItem instead of FlatButton.
 *    @props {Function} this.props.closeLeftNav
 *    close the LeftNav, parent component
 *
 *    TODO: handle closing of opening/closing of the modal through Redux
 *    TODO: The 'setting JSX closing tags to variable formula' simply won't work.
 *    TODO: Thus, refactor into a new component or go back to IF/ELSE the whole thing,
 *    TODO: with only the DIALOG as a variable to keep it DRY
 */

// React
import React from 'react';

// Radium
import Radium from 'radium';

// Material UI Components
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import MenuItem from 'material-ui/lib/menus/menu-item';

// Components
import LoginFBBtn from './LoginFBBtn';

const contentStyle = {
  base: {
    width: '100%',
    maxWidth: '450px',
    textAlign: 'center',
  },
};

const titleStyle = {
  base: {
    textAlign: 'center',
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
    color: '#db436c',
  },
};

const eventifyColor = {
  base: {
    color: '#53b3cb',
  },
};

@Radium
class SigninModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  /**
   * Opens the modal
   */
  handleOpen() {
    this.setState({ open: true });
  }

  /**
   * Closes the modal
   */
  handleClose() {
    const { menuItem, closeLeftNav } = this.props;

    // if this component renders a
    // menuItem inside of the leftNav
    // close the left nav when clicked out
    if (menuItem) {
      closeLeftNav();
    }
    this.setState({ open: false });
  }

  render() {
    const { menuItem } = this.props;
    const dialogEl = (
        <Dialog
          title = "Eventify"
          modal = {false}
          open = {this.state.open}
          contentStyle = {contentStyle.base}
          titleStyle = {titleStyle.base}
          onRequestClose={this.handleClose}
        >
          <LoginFBBtn />
        </Dialog>
    );

    if (menuItem) {
      return (
        <div>
          <MenuItem
            onTouchTap = {this.handleOpen}
            style = {eventifyColor.base}
          >
            {dialogEl}
          </MenuItem>
        </div>
      );
    }
    return (
      <div>
        <FlatButton
          label = "Log In"
          onClick = {this.handleOpen}
          style = {eventifyColor.base}
        />
          {dialogEl}
      </div>
    );
  }
}

SigninModal.propTypes = {
  menuItem: React.PropTypes.bool,
  closeLeftNav: React.PropTypes.func,
};

export default SigninModal;
