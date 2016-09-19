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

class JournalEntryTimeComponent extends React.Component {
  static propTypes = {
    content: React.PropTypes.any.isRequired,
    shouldEmojify: React.PropTypes.bool,
    time: React.PropTypes.string.isRequired
  }

  showDate(time) {
    const date = new Date(time);
    return date.toLocaleString();
  }

  render() {
    const { content, shouldEmojify, time } = this.props;
    return (
      <div className="date">{shouldEmojify ? emojify(content, entryEmoijiOptions) : content} {this.showDate(time)}</div>
    );
  }
}

JournalEntryTimeComponent.defaultProps = {
  actions: {},
  content: '',
  shouldEmojify: false,
  time: ''
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {
    actions: {}
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(JournalEntryTimeComponent);
