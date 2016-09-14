import { connect } from 'react-redux';
import React from 'react';
import T from 'i18n-react';

import { addMeetingAction, addMoodAction, addNoteAction } from 'actions/UiActions';

class JournalInputComponent extends React.Component {
  getContent = () => this._input ? this._input.value : '';
  resetContent = () => this._input ? (this._input.value = '') : '';

  render() {
    const { onAddMeeting, onAddMood, onAddNote } = this.props.actions;
    const getContent = this.getContent.bind(this);
    return (
      <div id="journal-input">
        <ul>
          <li onClick={() => onAddNote(getContent())}><i className="fa fa-sticky-note-o" /> {T.translate('note')}</li>
          <li onClick={() => onAddMood(getContent())}><i className="fa fa-smile-o" /> {T.translate('my-mood')}</li>
          <li onClick={() => onAddMeeting(getContent())}><i className="fa fa-calendar-check-o" /> {T.translate('ive-met')}</li>
        </ul>
        <textarea ref={(ta) => this._input = ta} />
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
      onAddMood: (content) => dispatch(addMoodAction(content)),
      onAddNote: (content) => dispatch(addNoteAction(content))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(JournalInputComponent);
