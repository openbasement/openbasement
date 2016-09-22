import { addFirstTimeFromDay, sortByTime } from './common';
import { makeEvent } from '../model/analysis';

const stillAliveEvents = journal => journal
  .reduce(addFirstTimeFromDay, [])
  .map(time => makeEvent('events.stillAlive', time));

const analyseForEvents = journal => [
  ...stillAliveEvents(journal)
].sort(sortByTime);

export default analyseForEvents;
