import { connect } from 'react-redux';
import React from 'react';
import { I18n } from 'react-redux-i18n';

class EventsComponent extends React.Component {
  static propTypes = {
    events: React.PropTypes.array.isRequired,
    locale: React.PropTypes.string.isRequired
  }

  makeEvent(event) {
    const date = new Date(event.time).toLocaleDateString();
    return <div key={event.time}>{I18n.t(event.content, { date: date })}</div>;
  }

  render() {
    const events = [...this.props.events].reverse().slice(0, 4);
    return (
      <section id="events">
        <h3><i className="fa fa-calendar"/> {I18n.t('events.title')}</h3>
        {events.length > 0 ? events.map(this.makeEvent) : <div>{I18n.t('events.empty')}</div>}
      </section>
    );
  }
}

EventsComponent.defaultProps = {
  actions: {},
  events: [],
  locale: ''
};

function mapStateToProps(state) {
  return {
    events: [...state.events],
    locale: state.i18n.locale
  };
}

function mapDispatchToProps() {
  return {
    actions: {}
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsComponent);
