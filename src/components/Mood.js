import { connect } from 'react-redux';
import React from 'react';

import JournalEntryContent from '../components/JournalEntryContent';
import JournalEntryTime from '../components/JournalEntryTime';

class MoodComponent extends React.Component {
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

MoodComponent.defaultProps = {
  actions: {},
  mood: {
    content: '',
    mood: '',
    id: 0,
    time: ''
  }
};

function mapStateToProps(state, props) {
  const journal = state.journal;
  const id = props.mood.id;
  // assert journal[id].id === id
  return {
    mood: journal[id]
  };
}

function mapDispatchToProps() {
  return {
    actions: {}
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MoodComponent);
