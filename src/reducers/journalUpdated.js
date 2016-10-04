import { ADD_MEETING, ADD_MOOD, ADD_NOTE } from '../actions/const';

function journalUpdated(journalVersion, action) {
  const version = journalVersion || 0;
  switch (action.type) {
    case ADD_MEETING:
    case ADD_MOOD:
    case ADD_NOTE:
      return version + 1;
    default:
      return version;
  }
};

export default journalUpdated;
