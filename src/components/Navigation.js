import { connect } from 'react-redux';
import React from 'react';

import mapDispatchToProps from '../actions';
import Profile from './Profile';
import Friends from './Friends';
import Settings from './Settings';

@connect(mapStateToProps, mapDispatchToProps)
export default class NavigationComponent extends React.Component {
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
