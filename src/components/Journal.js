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
    const journal = this.props.journal;
    return (
      <div id="journal-wrapper">
        <JournalInput />
        <section id="journal">
          {journal.map(this.journalEntryToArticle).reverse()}
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
  const sortById = (a, b) => a.id < b.id;
  return {
    journal: [ ...state.journal ].sort(sortById)
  };
}

function mapDispatchToProps() {
  return {
    actions: {}
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(JournalComponent);
