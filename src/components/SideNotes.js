import React from 'react';

import Notifications from 'components/Notifications'
import Events from 'components/Events'
import Interactions from 'components/Interactions'

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

SideNotesComponent.defaultProps = {
};

export default SideNotesComponent;
