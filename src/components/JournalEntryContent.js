import { connect } from 'react-redux';
import emojione from 'emojione';
import React from 'react';
import ReactMarkdown from 'react-markdown';

class JournalEntryContentComponent extends React.Component {
  render() {
    const content = this.props.content;
    const emojified = emojione.shortnameToImage(content);
    return (
      <ReactMarkdown source={emojified} />
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
