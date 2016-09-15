import { UI_NS, ADD_MEETING, ADD_MOOD, ADD_NOTE } from 'actions/const';

export function addMeetingAction(content) {
  const now = new Date().toISOString();
  return {
    ns: UI_NS,
    type: ADD_MEETING,
    payload: {
      content: content,
      time: now
    }
  }
}

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
}

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
}
