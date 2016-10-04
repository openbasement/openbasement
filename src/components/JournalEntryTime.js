import { connect } from 'react-redux';
import { emojify } from 'react-emojione';
import React from 'react';

import mapDispatchToProps from '../actions';
import { mapStateToProps } from '../model/state';
import entryEmojiOptions from '../images/entryEmojiOptions';

@connect(mapStateToProps, mapDispatchToProps)
export default class JournalEntryTimeComponent extends React.Component {
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
      <div className="date">{shouldEmojify ? emojify(content, entryEmojiOptions) : content} {this.showDate(time)}</div>
    );
  }
}
