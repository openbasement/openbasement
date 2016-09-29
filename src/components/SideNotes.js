import { connect } from 'react-redux';
import React from 'react';

import Notifications from './Notifications';
import Events from './Events';
import Interactions from './Interactions';

class SideNotesComponent extends React.Component {
  render() {
    return (
      <aside id="side-notes">
        <Notifications />
        <Events />
        <Interactions />
      </aside>
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

export default connect(mapStateToProps, mapDispatchToProps)(SideNotesComponent);
