import { connect } from 'react-redux';
import React from 'react';
import T from 'i18n-react';

class InteractionsComponent extends React.Component {
  static propTypes = {
    interactions: React.PropTypes.object.isRequired
  }

  makeIntaraction(interaction) {
    return <div key={interaction.key}>{interaction.content}</div>;
  }

  makeInteractions(interactions) {
    const elements = [];

    if (interactions.lastMeeting) {
      const time = interactions.lastMeeting.content;
      elements.push({ ...interactions.lastMeeting, content: T.translate('last-meeting', { time: time }) });
    }
    if (interactions.meetingsTotal) {
      const total = interactions.meetingsTotal.content;
      elements.push({ ...interactions.meetingsTotal, content: T.translate('meetings-total', { total: total }) });
    }

    return elements;
  }

  render() {
    const interactions = this.makeInteractions(this.props.interactions);
    return (
      <section id="interactions">
        <h3><i className="fa fa-group" /> {T.translate('Interactions')}</h3>
        {interactions.length > 0 ? interactions.map(this.makeIntaraction) : <T.div text="no-interactions" />}
      </section>
    );
  }
}

InteractionsComponent.defaultProps = {
  actions: {},
  interactions: {}
};

function mapStateToProps(state) {
  return {
    interactions: { ...state.interactions }
  };
}

function mapDispatchToProps() {
  return {
    actions: {}
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InteractionsComponent);
