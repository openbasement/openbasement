import { connect } from 'react-redux';
import React from 'react';
import { I18n } from 'react-redux-i18n';

import mapDispatchToProps from '../actions';
import { mapStateToProps } from '../model/state';

@connect(mapStateToProps, mapDispatchToProps)
export default class InteractionsComponent extends React.Component {
  static propTypes = {
    i18n: React.PropTypes.shape({
      locale: React.PropTypes.string.isRequired
    }),
    interactions: React.PropTypes.object.isRequired
  }

  makeIntaraction(interaction) {
    return <div key={interaction.key}>{interaction.content}</div>;
  }

  makeInteractions(interactions) {
    const elements = [];

    if (interactions.lastMeeting) {
      const time = this.showDate(interactions.lastMeeting.content);
      elements.push({ ...interactions.lastMeeting, content: I18n.t('interactions.last-meeting', { time: time }) });
    }
    if (interactions.meetingsTotal) {
      const total = interactions.meetingsTotal.content;
      elements.push({ ...interactions.meetingsTotal, content: I18n.t('interactions.meetings-total', { total: total }) });
    }

    return elements;
  }

  showDate(time) {
    const date = new Date(time);
    return date.toLocaleString();
  }

  render() {
    const interactions = this.makeInteractions(this.props.interactions);
    return (
      <section id="interactions">
        <h3><i className="fa fa-group" /> {I18n.t('interactions.title')}</h3>
        {interactions.length > 0 ? interactions.map(this.makeIntaraction) : <div>{I18n.t('interactions.empty')}</div>}
      </section>
    );
  }
}
