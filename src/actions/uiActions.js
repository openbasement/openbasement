import { UI_NS, ADD_MEETING, ADD_MOOD, ADD_NOTE,
         HIDE_NOTIFICATION,
         OPEN_PROFILE, CLOSE_PROFILE, CLOSE_FRIENDS, OPEN_FRIENDS, CLOSE_SETTINGS, OPEN_SETTINGS
       } from '../actions/const';

export function addMeetingAction(content) {
  const now = new Date().toISOString();
  return {
    ns: UI_NS,
    type: ADD_MEETING,
    payload: {
      content: content,
      time: now
    }
  };
};

export function addMoodAction(content, mood) {
  const now = new Date().toISOString();
  return {
    ns: UI_NS,
    type: ADD_MOOD,
    payload: {
      content: content,
      mood: mood,
      time: now
    }
  };
};

export function addNoteAction(content) {
  const now = new Date().toISOString();
  return {
    ns: UI_NS,
    type: ADD_NOTE,
    payload: {
      content: content,
      time: now
    }
  };
};

export function hideNotificationAction(content, time) {
  return {
    ns: UI_NS,
    type: HIDE_NOTIFICATION,
    payload: {
      content: content,
      time: time
    }
  };
};

export function closeProfileAction() {
  return {
    ns: UI_NS,
    type: CLOSE_PROFILE,
    payload: {}
  };
};

export function openProfileAction() {
  return {
    ns: UI_NS,
    type: OPEN_PROFILE,
    payload: {}
  };
};

export function closeFriendsAction() {
  return {
    ns: UI_NS,
    type: CLOSE_FRIENDS,
    payload: {}
  };
}

export function openFriendsAction() {
  return {
    ns: UI_NS,
    type: OPEN_FRIENDS,
    payload: {}
  };
};

export function closeSettingsAction() {
  return {
    ns: UI_NS,
    type: CLOSE_SETTINGS,
    payload: {}
  };
};

export function openSettingsAction() {
  return {
    ns: UI_NS,
    type: OPEN_SETTINGS,
    payload: {}
  };
};