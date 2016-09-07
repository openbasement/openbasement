import React from 'react';
import T from 'i18n-react';

class JournalInputComponent extends React.Component {
  render() {
    return (
      <div id="journal-input">
        <ul>
          <li><i className="fa fa-sticky-note-o" /> {T.translate('note')}</li>
          <li><i className="fa fa-smile-o" /> {T.translate('my-mood')}</li>
          <li><i className="fa fa-calendar-check-o" /> {T.translate('ive-met')}</li>
        </ul>
        <textarea />
      </div>
    );
  }
}

JournalInputComponent.defaultProps = {
};

export default JournalInputComponent;
