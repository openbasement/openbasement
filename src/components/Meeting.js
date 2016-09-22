import { connect } from 'react-redux';
import React from 'react';

import JournalEntryContent from './JournalEntryContent';
import JournalEntryTime from './JournalEntryTime';

class MeetingComponent extends React.Component {
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
