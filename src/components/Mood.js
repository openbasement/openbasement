import { connect } from 'react-redux';
import { emojify } from 'react-emojione';
import React from 'react';

import emojioneOptions from '../images/emojioneOptions';

const entryEmoijiOptions = {
  ...emojioneOptions,
  styles: {
    ...emojioneOptions.styles,
    height: '8.5pt',
    width: '8.5pt',
    margin: '0'
  }
};

class MoodComponent extends React.Component {
  showDate(time) {
    const date = new Date(time);
    return date.toLocaleString();
  }

  render() {
    const { id, content, mood, time } = this.props.mood;
    return (
      <article className="mood" id={'mood-'+id}>
        <div className="date">{emojify(mood, entryEmoijiOptions)} {this.showDate(time)}</div>
        <div>{emojify(content, emojioneOptions)}</div>
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
