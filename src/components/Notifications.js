import React from 'react';

class NotificationsComponent extends React.Component {
  render() {
    return (
      <section id="notifications">
        <h3><i className="fa fa-exclamation" /> Notifications</h3>
        <div>no notifications</div>
      </section>
    );
  }
}

NotificationsComponent.defaultProps = {
};

export default NotificationsComponent;
