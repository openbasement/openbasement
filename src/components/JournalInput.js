import React from 'react';

class JournalInputComponent extends React.Component {
  render() {
    return (
      <div id="journal-input">
        <ul>
          <li><i className="fa fa-sticky-note-o" /> note</li>
          <li><i className="fa fa-smile-o" /> my mood</li>
          <li><i className="fa fa-calendar-check-o" /> I've meet</li>
        </ul>
        <textarea />
      </div>
    );
  }
}

JournalInputComponent.defaultProps = {
};

export default JournalInputComponent;
