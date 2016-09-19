import { ADD_MEETING, ADD_MOOD, ADD_NOTE } from '../actions/const';
import { makeMeeting, makeMood, makeNote } from '../model/Entries';
import { updateJournal } from '../model/State';

function addEntry(journal = [], action) {
  // assert sorted ascending
  const appendEntry = updateJournal(journal);

  switch (action.type) {
    case ADD_MEETING:
      return appendEntry(makeMeeting(action.payload, journal.length));
    case ADD_MOOD:
      return appendEntry(makeMood(action.payload, journal.length));
    case ADD_NOTE:
      return appendEntry(makeNote(action.payload, journal.length));
    default:
      return journal;
  }
};

export default addEntry;
