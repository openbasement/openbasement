import { connect } from 'react-redux';
import React from 'react';

import JournalInput from 'components/JournalInput';

class JournalComponent extends React.Component {
  render() {
    return (
      <div id="journal-wrapper">
        <JournalInput />
        <section id="journal">
        </section>
      </div>
    );
  }
}

JournalComponent.defaultProps = {
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

export default connect(mapStateToProps, mapDispatchToProps)(JournalComponent);
