import { connect } from 'react-redux';
import React from 'react';

import JournalInput from 'components/JournalInput';
import Note from 'components/Note';

class JournalComponent extends React.Component {
  journalEntryToArticle(entry) {
    switch(entry.type) {
    case 'note':
      return <Note note={entry} />;
    default:
      return '';
    }
  }

  render() {
    const journal = this.props.journal.reverse();
    return (
      <div id="journal-wrapper">
        <JournalInput />
        <section id="journal">
          {journal.map(this.journalEntryToArticle)}
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
