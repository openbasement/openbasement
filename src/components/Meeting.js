import { connect } from 'react-redux';
import React from 'react';

import JournalEntryContent from 'components/JournalEntryContent';
import JournalEntryTime from 'components/JournalEntryTime';

class MeetingComponent extends React.Component {
  render() {
    const { id, content, time } = this.props.meeting;
    return (
      <article className="meeting" id={'meeting-'+id}>
        <JournalEntryTime content={<i className="fa fa-sticky-check-o" />} time={time} />
        <JournalEntryContent content={content} />
      </article>
    );
  }
}

MeetingComponent.defaultProps = {
  actions: {},
  meeting: {
    content: '',
    id: 0,
    time: ''
  }
};

function mapStateToProps(state, props) {
  const journal = state.journal;
  const id = props.meeting.id;
  // assert journal[id].id === id
  return {
    meeting: journal[id]
  };
}

function mapDispatchToProps() {
  return {
    actions: {}
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MeetingComponent);
