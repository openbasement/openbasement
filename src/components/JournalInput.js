import autosize from 'autosize';
import { connect } from 'react-redux';
import { emojify } from 'react-emojione';
import React from 'react';
import ReactDOM from 'react-dom';
import T from 'i18n-react';

import { addMeetingAction, addMoodAction, addNoteAction } from '../actions';
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

class JournalInputComponent extends React.Component {
  static propTypes = {
    actions: React.PropTypes.shape({
      onAddMeeting: React.PropTypes.func.isRequired,
      onAddMood: React.PropTypes.func.isRequired,
      onAddNote: React.PropTypes.func.isRequired
    }),
    journalSize: React.PropTypes.number.isRequired
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this._input).focus();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.journalSize < this.props.journalSize && this._input) {
      this._input.style = '';
      this._input.value = '';
    }
  }

  render() {
    const { onAddMeeting, onAddMood, onAddNote } = this.props.actions;

    const getContent = () => this._input ? this._input.value : '';
    const dispatchIfContent = actionDispatcher => () => {
      const content = getContent();
      if (content.trim()) {
        actionDispatcher(content);
      }
    };
    const addMeeting = dispatchIfContent(onAddMeeting);
    const addMood = (mood) => dispatchIfContent(content => onAddMood(content, mood));
    const addNote = dispatchIfContent(onAddNote);

    const makeEmojiButton = (name) => emojify(name, menuEmoijiOptions);

    const attatchInput = (function(ta) {
      this._input = ta;
    }).bind(this);

    const resizeInput = (textarea) => autosize(ReactDOM.findDOMNode(this._input));

    return (
      <div id="journal-input">
        <textarea onChange={resizeInput} ref={attatchInput} />
        <div>{T.translate('hint')} <a href="http://emoji.codes/">emojione</a>, <a href="http://commonmark.org/">markdown</a></div>
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
  },
  journalSize: 0
};

function mapStateToProps(state) {
  return {
    journalSize: state.journal.length
  };
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
