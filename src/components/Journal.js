import { connect } from 'react-redux';
import React from 'react';

import { MEETING, MOOD, NOTE } from '../model/const';
import JournalInput from '../components/JournalInput';
import Meeting from '../components/Meeting';
import Mood from '../components/Mood';
import Note from '../components/Note';

class JournalComponent extends React.Component {
  static propTypes = {
    journal: React.PropTypes.array.isRequired
  }

  journalEntryToArticle(entry) {
    switch (entry.type) {
      case MEETING:
        return <Meeting key={entry.id} meeting={entry} />;
      case MOOD:
        return <Mood key={entry.id} mood={entry} />;
      case NOTE:
        return <Note key={entry.id} note={entry} />;
      default:
        console.warn('Unrecognized journal type', entry.type, ' for ', entry); // eslint-disable-line no-console
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
  const journal = [...state.journal].reverse();
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
