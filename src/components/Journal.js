import React from 'react';

import JournalInput from 'components/JournalInput';

class JournalComponent extends React.Component {
  render() {
    return (
      <div id="journal-wrapper">
        <JournalInput />
        <section id="journal">
        </section>
      </div>
    );
  }
}

JournalComponent.defaultProps = {
};

export default JournalComponent;
