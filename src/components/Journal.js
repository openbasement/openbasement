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
  actions: {},
  journal: []
};

function mapStateToProps(state) {
  return {
    journal: state.journal
  };
}

function mapDispatchToProps() {
  return {
    actions: {}
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(JournalComponent);
