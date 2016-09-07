import React from 'react';

import JournalInput from 'components/JournalInput';

class JournalComponent extends React.Component {
  render() {
    return (
      <div id="journal-wrapper">
        <JournalInput />
        <section id="journal">
          <article>EMPTY</article>
          <article>EMPTY</article>
          <article>EMPTY</article>
        </section>
      </div>
    );
  }
}

JournalComponent.defaultProps = {
};

export default JournalComponent;
