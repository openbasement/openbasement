import autosize from 'autosize';
import { connect } from 'react-redux';
import { emojify } from 'react-emojione';
import React from 'react';
import ReactDOM from 'react-dom';
import { I18n } from 'react-redux-i18n';

import mapDispatchToProps from '../actions';
import { mapStateToProps } from '../model/state';
import emojioneOptions from '../images/emojioneOptions';

const menuEmoijiOptions = {
  ...emojioneOptions,
  styles: {
    ...emojioneOptions.styles,
    height: '12pt',
    width: '12pt',
    margin: '0',
    marginBottom: '-3.5pt'
  }
};

@connect(mapStateToProps, mapDispatchToProps)
export default class JournalInputComponent extends React.Component {
  static propTypes = {
    actions: React.PropTypes.shape({
      addMeeting: React.PropTypes.func.isRequired,
      addMood: React.PropTypes.func.isRequired,
      addNote: React.PropTypes.func.isRequired
    }),
    i18n: React.PropTypes.shape({
      locale: React.PropTypes.string.isRequired
    }),
    journalVersion: React.PropTypes.number.isRequired
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this._input).focus();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.journalVersion !== this.props.journalVersion && this._input) {
      this._input.style = '';
      this._input.value = '';
    }
  }

  render() {
    const { addMeeting, addMood, addNote } = this.props.actions;

    const getContent = () => this._input ? this._input.value : '';
    const dispatchIfContent = actionDispatcher => () => {
      const content = getContent();
      if (content.trim()) {
        actionDispatcher(content);
      }
    };
    const addMeetingIfContent = dispatchIfContent(addMeeting);
    const addMoodIfContent = (mood) => dispatchIfContent(content => addMood(content, mood));
    const addNoteIfContent = dispatchIfContent(addNote);

    const makeEmojiButton = (name) => emojify(name, menuEmoijiOptions);

    const attatchInput = (function(ta) {
      this._input = ta;
    }).bind(this);

    const resizeInput = (textarea) => autosize(ReactDOM.findDOMNode(this._input));

    return (
      <div id="journal-input">
        <textarea onChange={resizeInput} ref={attatchInput} />
        <div>{I18n.t('journal.hint')}: <a href="http://emoji.codes/">emojione</a>, <a href="http://commonmark.org/">markdown</a></div>
        <ul>
          <li onClick={addNoteIfContent}><i className="fa fa-sticky-note-o" /> {I18n.t('journal.note')}</li>
          <li onClick={addMeetingIfContent}><i className="fa fa-calendar-check-o" /> {I18n.t('journal.meeting')}</li>
          <li onClick={addMoodIfContent(':smile:')}>{makeEmojiButton(':smile:')}</li>
          <li onClick={addMoodIfContent(':disappointed:')}>{makeEmojiButton(':disappointed:')}</li>
          <li onClick={addMoodIfContent(':angry:')}>{makeEmojiButton(':angry:')}</li>
        </ul>
      </div>
    );
  }
}
