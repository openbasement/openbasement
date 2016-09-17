import { HIDE_NOTIFICATION } from 'actions/const';

const hideNotification = (notifications = [], action) => {
  switch (action.type) {
  case HIDE_NOTIFICATION:
    const newNotifications = [ ...notifications ];
    const matcher = action.payload;
    const index = notifications.findIndex(entry => entry.content === matcher.content && entry.time === matcher.time);
    if (index !== undefined)
      newNotifications[index].read = true;
    return newNotifications;
  default:
    return notifications;
  }
};

export default hideNotification;
