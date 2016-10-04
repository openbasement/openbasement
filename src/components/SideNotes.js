import { connect } from 'react-redux';
import React from 'react';

import mapDispatchToProps from '../actions';
import { mapStateToProps } from '../model/state';
import Notifications from './Notifications';
import Events from './Events';
import Interactions from './Interactions';

@connect(mapStateToProps, mapDispatchToProps)
export default class SideNotesComponent extends React.Component {
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
