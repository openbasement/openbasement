import { connect } from 'react-redux';
import { emojify } from 'react-emojione';
import React from 'react';
import T from 'i18n-react';

import { addMeetingAction, addMoodAction, addNoteAction } from 'actions/UiActions';
import emojioneOptions from '../images/emojioneOptions';

const menuEmoijiOptions = {
  ...emojioneOptions,
  styles: {
    ...emojioneOptions.styles,
    height: '7pt',
    width: '7pt',
    margin: '0'
  }
};

class JournalInputComponent extends React.Component {
  render() {
    const { onAddMeeting, onAddMood, onAddNote } = this.props.actions;

    const getContent = () => this._input ? this._input.value : '';
    const addMeeting = () => onAddMeeting(getContent());
    const addMood = (mood) => () => onAddMood(getContent(), mood);
    const addNote = () => onAddNote(getContent());

    const makeEmojiButton = (name) => emojify(name, menuEmoijiOptions);

    return (
      <div id="journal-input">
        <textarea ref={(ta) => this._input = ta} />
        <ul>
          <li onClick={addNote}><i className="fa fa-sticky-note-o" /> {T.translate('note')}</li>
          <li onClick={addMeeting}><i className="fa fa-calendar-check-o" /> {T.translate('meeting')}</li>
          <li onClick={addMood(':smile:')}>{makeEmojiButton(':smile:')}</li>
          <li onClick={addMood(':disappointed:')}>{makeEmojiButton(':disappointed:')}</li>
          <li onClick={addMood(':angry:')}>{makeEmojiButton(':angry:')}</li>
        </ul>
      </div>
    );
  }
}

JournalInputComponent.defaultProps = {
  actions: {
    onAddMeetings: () => undefined,
    onAddMood: () => undefined,
    onAddNote: () => undefined
  }
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      onAddMeeting: (content) => dispatch(addMeetingAction(content)),
      onAddMood: (content, mood) => dispatch(addMoodAction(content, mood)),
      onAddNote: (content) => dispatch(addNoteAction(content))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(JournalInputComponent);
