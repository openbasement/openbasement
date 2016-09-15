import { connect } from 'react-redux';
import React from 'react';

class MoodComponent extends React.Component {
  showDate(time) {
    const date = new Date(time);
    return date.toLocaleString();
  }

  render() {
    const { id, content, mood, time } = this.props.mood;
    return (
      <article className="mood" id={'mood-'+id}>
        <div className="date fa fa-smile-o"> {this.showDate(time)}</div>
        <div>{content}</div>
      </article>
    );
  }
}

MoodComponent.defaultProps = {
  actions: {},
  mood: {
    content: '',
    mood: '',
    id: 0,
    time: ''
  }
};

function mapStateToProps(state, props) {
  const journal = state.journal;
  const id = props.mood.id;
  return {
    mood: journal[id]
  };
}

function mapDispatchToProps() {
  return {
    actions: {}
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MoodComponent);
