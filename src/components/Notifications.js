import { connect } from 'react-redux';
import React from 'react';
import { I18n } from 'react-redux-i18n';

import mapDispatchToProps from '../actions';
import { mapStateToProps } from '../model/state';

@connect(mapStateToProps, mapDispatchToProps)
export default class NotificationsComponent extends React.Component {
  static propTypes = {
    actions: React.PropTypes.shape({
      hideNotification: React.PropTypes.func.isRequired
    }),
    i18n: React.PropTypes.shape({
      locale: React.PropTypes.string.isRequired
    }),
    notifications: React.PropTypes.array.isRequired
  }

  makeNotification(notification) {
    const time = new Date(notification.time).toLocaleString();
    const hideNotification = () => this.props.actions.hideNotification(notification);
    return (
      <div key={notification.content + notification.time}>
        <i className="fa fa-remove" onClick={hideNotification}/> {I18n.t(notification.content, { time: time })}
      </div>
    );
  }

  render() {
    const notifications = this.props.notifications.filter(notification => !notification.read).reverse();
    const makeNotification = this.makeNotification.bind(this);
    return (
      <section id="notifications">
        <h3><i className="fa fa-exclamation" /> {I18n.t('notifications.title')}</h3>
        {notifications.length > 0 ? notifications.map(makeNotification) : <div>{I18n.t('notifications.empty')}</div>}
      </section>
    );
  }
}
