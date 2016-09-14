import { connect } from 'react-redux';
import React from 'react';

class NoteComponent extends React.Component {
  render() {
    const { id, content, time } = this.props.note;
    return (
      <article className="note" id={'note-'+id}>{content}<br/>{time}</article>
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
