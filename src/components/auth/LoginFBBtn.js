/**
 * "Log in with Facebook" button
 * when you click on Sign-up or Sign-in
 *
 * TODO: Make the "Log in with Facebook" button mobile friendly
 */

// React
import React, { Component, PropTypes } from 'react';

// Radium
import Radium from 'radium';

// Components
import FlatButton from 'material-ui/lib/flat-button';

const style = {
  base: {
    color: 'white',
    fontSize: '2.5vw',
    display: 'block',
    margin: '0px auto 15px',
    padding: '10px',
    backgroundColor: '#53b3cb',
  },
};

@Radium
class SignupBtn extends Component {
  static contextTypes = {
    router: PropTypes.object,
  };

  render() {
    return (
      <div style={style.mediaQ}>
        <FlatButton
          label="Log In With Facebook"
          style={style.base}
          linkButton
          href="api/auth/facebook"
        />
      </div>
    );
  }
}

export default SignupBtn;
