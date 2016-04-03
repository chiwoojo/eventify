/**
 * The Top(est) Level of our Visible app.
 * Renders the NavBar and Children Components
 * which are the Dashboard, Create Event page, etc.
 */

// React
import React, { Component } from 'react';

// Radium
import Radium, { StyleRoot } from 'radium';

// Components
import NavBar from '../navBar/navBar.js';

@Radium
class App extends Component {
  render() {
    return (
      <StyleRoot>
        <div>
          <NavBar />
          {this.props.children}
        </div>
      </StyleRoot>
    );
  }
}

// for eslint
App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
