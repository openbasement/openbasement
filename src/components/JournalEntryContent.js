import { connect } from 'react-redux';
import emojione from 'emojione';
import hljs from 'highlight.js';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';

import mapDispatchToProps from '../actions';
import { mapStateToProps } from '../model/state';

@connect(mapStateToProps, mapDispatchToProps)
export default class JournalEntryContentComponent extends React.Component {
  static propTypes = {
    content: React.PropTypes.string.isRequired
  }

  componentDidMount() {
    const here = ReactDOM.findDOMNode(this);
    const codes = here.querySelectorAll('pre code');
    codes.forEach(code => hljs.highlightBlock(code));
  }

  render() {
    const content = this.props.content;
    const emojified = emojione.shortnameToImage(content);
    return (
      <ReactMarkdown source={emojified} />
    );
  }
}
