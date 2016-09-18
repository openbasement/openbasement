import { connect } from 'react-redux';
import React from 'react';

import JournalEntryContent from 'components/JournalEntryContent';
import JournalEntryTime from 'components/JournalEntryTime';

class NoteComponent extends React.Component {
  render() {
    const { id, content, time } = this.props.note;
    return (
      <article className="note" id={'note-'+id}>
        <JournalEntryTime content={<i className="fa fa-sticky-note-o" />} time={time} />
        <JournalEntryContent content={content} />
      </article>
    );
  }
}

NoteComponent.defaultProps = {
  actions: {},
  note: {
    content: '',
    id: 0,
    time: ''
  }
};

function mapStateToProps(state, props) {
  const journal = state.journal;
  const id = props.note.id;
  // assert journal[id].id === id
  return {
    note: journal[id]
  };
}

function mapDispatchToProps() {
  return {
    actions: {}
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteComponent);
