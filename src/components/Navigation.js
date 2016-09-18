import { connect } from 'react-redux';
import React from 'react';

import Profile from 'components/Profile';
import Friends from 'components/Friends';
import Settings from 'components/Settings';

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

NavigationComponent.defaultProps = {
  actions: {}
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {
    actions: {}
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationComponent);
