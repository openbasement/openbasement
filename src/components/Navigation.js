import { connect } from 'react-redux';
import React from 'react';

import Profile from './Profile';
import Friends from './Friends';
import Settings from './Settings';

class NavigationComponent extends React.Component {
  render() {
    return (
      <nav id="navigation">
        <ul>
          <Profile />
          <Friends />
          <Settings />
        </ul>
      </nav>
    );
  }
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {
    actions: {}
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationComponent);
