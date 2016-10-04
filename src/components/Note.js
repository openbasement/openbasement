import { connect } from 'react-redux';
import React from 'react';

import mapDispatchToProps from '../actions';
import { mapStateToProps } from '../model/state';
import JournalEntryContent from './JournalEntryContent';
import JournalEntryTime from './JournalEntryTime';

@connect(mapStateToProps, mapDispatchToProps)
export default class NoteComponent extends React.Component {
  static propTypes = {
    note: React.PropTypes.shape({
      content: React.PropTypes.string.isRequired,
      id: React.PropTypes.number.isRequired,
      time: React.PropTypes.string.isRequired
    })
  }

  render() {
    const { id, content, time } = this.props.note;
    return (
      <article className="note" id={'note-' + id}>
        <JournalEntryTime content={<i className="fa fa-sticky-note-o" />} time={time} />
        <JournalEntryContent content={content} />
      </article>
    );
  }
}
