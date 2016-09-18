import { connect } from 'react-redux';
import { emojify } from 'react-emojione';
import React from 'react';
import ReactMarkdown from 'react-markdown';

import emojioneOptions from '../images/emojioneOptions';

class JournalEntryContentComponent extends React.Component {
  render() {
    const content = this.props.content;
    emojify(content, emojioneOptions); // TODO
    return (
      <ReactMarkdown source={content} />
    );
  }
}

JournalEntryContentComponent.defaultProps = {
  actions: {},
  content: ''
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {
    actions: {}
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(JournalEntryContentComponent);
