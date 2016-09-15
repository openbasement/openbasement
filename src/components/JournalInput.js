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

    return (
      <div id="journal-input">
        <textarea ref={(ta) => this._input = ta} />
        <ul>
          <li onClick={() => onAddNote(getContent())}><i className="fa fa-sticky-note-o" /> {T.translate('note')}</li>
          <li onClick={() => onAddMeeting(getContent())}><i className="fa fa-calendar-check-o" /> {T.translate('meeting')}</li>
          <li onClick={() => onAddMood(getContent(), ':smile:')}>{emojify(':smile:', menuEmoijiOptions)}</li>
          <li onClick={() => onAddMood(getContent(), ':disappointed:')}>{emojify(':disappointed:', menuEmoijiOptions)}</li>
          <li onClick={() => onAddMood(getContent(), ':angry:')}>{emojify(':angry:', menuEmoijiOptions)}</li>
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
