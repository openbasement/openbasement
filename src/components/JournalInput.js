import { connect } from 'react-redux';
import React from 'react';
import T from 'i18n-react';

import { addMeetingAction, addMoodAction, addNoteAction } from 'actions/UiActions';

class JournalInputComponent extends React.Component {
  render() {
    const { onAddMeeting, onAddMood, onAddNote } = this.props.actions;
    const getContent = () => this._input ? this._input.value : '';

    return (
      <div id="journal-input">
        <textarea ref={(ta) => this._input = ta} />
        <ul>
          <li onClick={() => onAddNote(getContent())}><i className="fa fa-sticky-note-o" /> {T.translate('note')}</li>
          <li onClick={() => onAddMeeting(getContent())}><i className="fa fa-calendar-check-o" /> {T.translate('ive-met')}</li>
          <li onClick={() => onAddMood(getContent(), 'smile')}><i className="fa fa-smile-o" /> {T.translate('my-mood')}</li>
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
