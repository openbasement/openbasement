import { connect } from 'react-redux';
import React from 'react';
import T from 'i18n-react';

import { hideNotificationAction } from '../actions/UiActions';

class NotificationsComponent extends React.Component {
  static propTypes = {
    actions: React.PropTypes.shape({
      hideNotification: React.PropTypes.func.isRequired
    }),
    notifications: React.PropTypes.array.isRequired
  }

  makeNotification(notification) {
    const date = new Date(notification.time).toLocaleString();
    const hideNotification = () => this.props.actions.hideNotification(notification);
    return <div key={notification.time}><i className="fa fa-remove" onClick={hideNotification}/> {T.translate(notification.content, { time: date })}</div>;
  }

  render() {
    const notifications = this.props.notifications.filter(notification => !notification.read).reverse();
    return (
      <section id="notifications">
        <h3><i className="fa fa-exclamation" /> {T.translate('Notifications')}</h3>
        {notifications.length > 0 ? notifications.map(this.makeNotification.bind(this)) : <T.div text="no-notifications" />}
      </section>
    );
  }
}

NotificationsComponent.defaultProps = {
  actions: {
    hideNotification: () => undefined
  },
  notifications: []
};

function mapStateToProps(state) {
  return {
    notifications: [...state.notifications]
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      hideNotification: (notification) => dispatch(hideNotificationAction(notification.content, notification.time))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsComponent);
