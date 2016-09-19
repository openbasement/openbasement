import { connect } from 'react-redux';
import React from 'react';
import T from 'i18n-react';

class EventsComponent extends React.Component {
  static propTypes = {
    events: React.PropTypes.array.isRequired
  }

  makeEvent(event) {
    const date = new Date(event.time).toLocaleString();
    return <div key={event.time}>{T.translate(event.content, { time: date })}</div>;
  }

  render() {
    const events = [...this.props.events].reverse().slice(0, 4);
    return (
      <section id="events">
        <h3><i className="fa fa-calendar"/> {T.translate('Events')}</h3>
        {events.length > 0 ? events.map(this.makeEvent) : <T.div text="no-events" />}
      </section>
    );
  }
}

EventsComponent.defaultProps = {
  actions: {},
  events: []
};

function mapStateToProps(state) {
  return {
    events: [...state.events]
  };
}

function mapDispatchToProps() {
  return {
    actions: {}
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsComponent);
