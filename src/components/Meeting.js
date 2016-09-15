import { connect } from 'react-redux';
import { emojify } from 'react-emojione';
import React from 'react';

import emojioneOptions from '../images/emojioneOptions';

class MeetingComponent extends React.Component {
  showDate(time) {
    const date = new Date(time);
    return date.toLocaleString();
  }

  render() {
    const { id, content, time } = this.props.meeting;
    return (
      <article className="meeting" id={'meeting-'+id}>
        <div className="date"><i className="fa fa-calendar-check-o" /> {this.showDate(time)}</div>
        <div>{emojify(content, emojioneOptions)}</div>
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
