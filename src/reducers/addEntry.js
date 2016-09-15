import { ADD_MEETING, ADD_MOOD, ADD_NOTE } from 'actions/const';

const makeMeeting = (action, id) => {
  const { content, time } = action.payload;
  return {
    type: 'meeting',
    id: id,
    content: content,
    time: time
  };
}

const makeMood = (action, id) => {
  const { content, mood, time } = action.payload;
  return {
    type: 'mood',
    id: id,
    content: content,
    mood: mood,
    time: time
  };
}

const makeNote = (action, id) => {
  const { content, time } = action.payload;
  return {
    type: 'note',
    id: id,
    content: content,
    time: time
  };
}

const addEntry = (journal = [], action) => {
  // assert sorted ascending
  const appendEntryToJournal = (entry) => [ ...journal, entry ];

  switch (action.type) {
  case ADD_MEETING:
    return appendEntryToJournal(makeMeeting(action, journal.length));
  case ADD_MOOD:
    return appendEntryToJournal(makeMood(action, journal.length));
  case ADD_NOTE:
    return appendEntryToJournal(makeNote(action, journal.length));
  default:
    return journal;
  }
};

export default addEntry;
