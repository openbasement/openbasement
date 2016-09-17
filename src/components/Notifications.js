import { connect } from 'react-redux';
import React from 'react';
import T from 'i18n-react';

class NotificationsComponent extends React.Component {
  makeNotification(notification) {
    return <div key={notification.time}>{notification.content}</div>;
  }

  render() {
    const notifications = this.props.notifications.filter(notification => !notification.read);
    return (
      <section id="notifications">
        <h3><i className="fa fa-exclamation" /> {T.translate('Notifications')}</h3>
        {notifications.length > 0 ? notifications.map(this.makeNotification) : <T.div text="no-notifications" />}
      </section>
    );
  }
}

NotificationsComponent.defaultProps = {
  actions: {},
  notifications: []
};

function mapStateToProps(state) {
  return {
    notifications: [ ...state.notifications ]
  };
}

function mapDispatchToProps() {
  return {
    actions: {}
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsComponent);
