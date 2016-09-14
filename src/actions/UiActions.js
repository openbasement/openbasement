import { UI_NS, ADD_MEETING, ADD_MOOD, ADD_NOTE, SELECT_MOOD } from 'actions/const';

export function addMeetingAction(content) {
	const now = new Date().getTime().toString();
  return {
  	ns: UI_NS,
    type: ADD_MEETING,
    payload: {
      content: content,
      time: now
    }
  }
}

export function addMoodAction(content) {
	const now = new Date().getTime().toString();
  return {
  	ns: UI_NS,
    type: ADD_MOOD,
    payload: {
      content: content,
      time: now
    }
  };
}

export function addNoteAction(content) {
	const now = new Date().getTime().toString();
  return {
  	ns: UI_NS,
    type: ADD_NOTE,
    payload: {
      content: content,
      time: now
    }
  };
}

export function selectMoodAction(content, mood) {
	const now = new Date().getTime().toString();
  return {
  	ns: UI_NS,
    type: SELECT_MOOD,
    payload: {
      content: content,
      mood: mood,
      time: now
    }
  };
}
