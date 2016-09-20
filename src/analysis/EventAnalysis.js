import { makeEvent } from '../model/Analysis';
import { addFirstTimeFromDay, sortByTime } from '../analysis/Common';

const stillAliveEvents = journal => journal.reduce(addFirstTimeFromDay, []).map(time => makeEvent('still-alive', time));

const EventAnalysis = journal => [
  ...stillAliveEvents(journal)
].sort(sortByTime);

export default EventAnalysis;
