import { CLOSE_PROFILE, OPEN_PROFILE,
         CLOSE_FRIENDS, OPEN_FRIENDS,
         CLOSE_SETTINGS, OPEN_SETTINGS,
         CLOSE_WELCOME } from '../actions/const';

const changeUi = (ui = {}, action) => {
  switch (action.type) {
    case CLOSE_PROFILE:
      return { ...ui, isProfileOpened: false };
    case OPEN_PROFILE:
      return { ...ui, isProfileOpened: true };
    case CLOSE_FRIENDS:
      return { ...ui, isFriendsOpened: false };
    case OPEN_FRIENDS:
      return { ...ui, isFriendsOpened: true };
    case CLOSE_SETTINGS:
      return { ...ui, isSettingsOpened: false };
    case OPEN_SETTINGS:
      return { ...ui, isSettingsOpened: true };
    case CLOSE_WELCOME:
      return { ...ui, wasWelcomeOpened: true };
    default:
      return ui;
  }
};

export default changeUi;
