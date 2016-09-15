import { connect } from 'react-redux';
import React from 'react';

import JournalInput from 'components/JournalInput';
import Meeting from 'components/Meeting';
import Mood from 'components/Mood';
import Note from 'components/Note';

class JournalComponent extends React.Component {
  journalEntryToArticle(entry) {
    switch(entry.type) {
    case 'meeting':
      return <Meeting key={entry.id} meeting={entry} />;
    case 'mood':
      return <Mood key={entry.id} mood={entry} />;
    case 'note':
      return <Note key={entry.id} note={entry} />;
    }
  }

  render() {
    // assert sorted descending
    const journal = this.props.journal;
    const entries = journal.map(this.journalEntryToArticle);
    return (
      <div id="journal-wrapper">
        <JournalInput />
        <section id="journal">
          {entries}
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
  const journal = [ ...state.journal ].reverse();
  return {
    journal: journal
  };
}

function mapDispatchToProps() {
  return {
    actions: {}
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(JournalComponent);
