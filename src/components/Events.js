import { connect } from 'react-redux';
import React from 'react';
import T from 'i18n-react';

class EventsComponent extends React.Component {
  render() {
    return (
      <section id="events">
        <h3><i className="fa fa-calendar"/> {T.translate('Events')}</h3>
        <T.div text="no-events" />
      </section>
    );
  }
}

EventsComponent.defaultProps = {
  actions: {}
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {
    actions: {}
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsComponent);
