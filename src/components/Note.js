import { connect } from 'react-redux';
import { emojify } from 'react-emojione';
import React from 'react';

import emojioneOptions from '../images/emojioneOptions';

class NoteComponent extends React.Component {
  showDate(time) {
    const date = new Date(time);
    return date.toLocaleString();
  }

  render() {
    const { id, content, time } = this.props.note;
    return (
      <article className="note" id={'note-'+id}>
        <div className="date">{id} <i className="fa fa-sticky-note-o" /> {this.showDate(time)}</div>
        <div>{emojify(content, emojioneOptions)}</div>
      </article>
    );
  }
}

NoteComponent.defaultProps = {
  actions: {},
  note: {
    content: '',
    id: 0,
    time: ''
  }
};

function mapStateToProps(state, props) {
  const journal = state.journal;
  const id = props.note.id;
  // assert journal[id].id === id
  return {
    note: journal[id]
  };
}

function mapDispatchToProps() {
  return {
    actions: {}
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteComponent);
