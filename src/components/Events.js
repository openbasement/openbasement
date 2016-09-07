import React from 'react';

class EventsComponent extends React.Component {
  render() {
    return (
      <section id="events">
      	<h3><i className="fa fa-calendar"/> Events</h3>
      	<div>no events</div>
      </section>
    );
  }
}

EventsComponent.defaultProps = {
};

export default EventsComponent;
