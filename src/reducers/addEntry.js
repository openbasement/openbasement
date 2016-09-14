import { ADD_MEETING, SELECT_MOOD, ADD_NOTE } from 'actions/const';

const makeMeeting = (action) => {
	const { content, time } = action.payload;
  return {
    type: 'meeting',
    content: content,
    time: time
  };
}

const makeMood = (action) => {
  const { content, mood, time } = action.payload;
  return {
    type: 'mood',
    content: content,
    mood: mood,
    time: time
  };
}

const makeNote = (action) => {
  const { content, time } = action.payload;
  return {
    type: 'note',
    content: content,
    time: time
  };
}

const addEntry = (state = {journal: []}, action) => {
  console.log('state:');
  console.log(state);
  console.log('action:');
  console.log(action);

  function appendEntryToJournal(entry) {
    const journal = state.journal
    return { ...state, journal: [ ...journal, entry ] };
  }

  switch (action.type) {
  case ADD_MEETING:
    return appendEntryToJournal(makeMeeting(action));
  case SELECT_MOOD:
    return appendEntryToJournal(makeMood(action));
  case ADD_NOTE:
    return appendEntryToJournal(makeNote(action));
  default:
    return state;
  }
};

export default addEntry;
