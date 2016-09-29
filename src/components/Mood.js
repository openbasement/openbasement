import { connect } from 'react-redux';
import React from 'react';

import mapDispatchToProps from '../actions';
import JournalEntryContent from './JournalEntryContent';
import JournalEntryTime from './JournalEntryTime';

function mapStateToProps(state, props) {
  const journal = state.journal;
  const id = props.mood.id;
  return {
    mood: journal[id]
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class MoodComponent extends React.Component {
  static propTypes = {
    mood: React.PropTypes.shape({
      content: React.PropTypes.string.isRequired,
      mood: React.PropTypes.string.isRequired,
      id: React.PropTypes.number.isRequired,
      time: React.PropTypes.string.isRequired
    })
  }

  render() {
    const { id, content, mood, time } = this.props.mood;
    const emojify = true;
    return (
      <article className="mood" id={'mood-' + id}>
        <JournalEntryTime content={mood} shouldEmojify={emojify} time={time} />
        <JournalEntryContent content={content} />
      </article>
    );
  }
}
