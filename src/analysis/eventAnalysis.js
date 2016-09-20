import { addFirstTimeFromDay, sortByTime } from '../analysis/common';
import { makeEvent } from '../model/analysis';

const stillAliveEvents = journal => journal.reduce(addFirstTimeFromDay, []).map(time => makeEvent('still-alive', time));

const eventAnalysis = journal => [
  ...stillAliveEvents(journal)
].sort(sortByTime);

export default eventAnalysis;