import { connect } from 'react-redux';
import React from 'react';

class NoteComponent extends React.Component {
  showDate(time) {
    const date = new Date(time);
    return date.toLocaleString();
  }

  render() {
    const { id, content, time } = this.props.note;
    return (
      <article className="note" id={'note-'+id}>
        <div className="date fa fa-sticky-note-o"> {this.showDate(time)}</div>
        <div>{content}</div>
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
