import { connect } from 'react-redux';
import React from 'react';

import mapDispatchToProps from '../actions';
import { mapStateToProps } from '../model/state';
import JournalEntryContent from './JournalEntryContent';
import JournalEntryTime from './JournalEntryTime';

@connect(mapStateToProps, mapDispatchToProps)
export default class MeetingComponent extends React.Component {
  static propTypes = {
    meeting: React.PropTypes.shape({
      content: React.PropTypes.string.isRequired,
      id: React.PropTypes.number.isRequired,
      time: React.PropTypes.string.isRequired
    })
  }

  render() {
    const { id, content, time } = this.props.meeting;
    return (
      <article className="meeting" id={'meeting-' + id}>
        <JournalEntryTime content={<i className="fa fa-calendar-check-o" />} time={time} />
        <JournalEntryContent content={content} />
      </article>
    );
  }
}
