import { MEETING } from '../model/const';
import { makeEvent, makeInteraction, makeNotification } from '../model/Analysis';

const sortByTime = (a, b) => Date.parse(a) - Date.parse(b);

const findEvents = journal => {
  const events = [];

  const asDay = (time) => {
    const date = new Date(time);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  const addFirstFromDay = (times, entry) => {
    const date = asDay(entry.time);
    const dates = times.map(asDay);
    return !dates.find(d => d.valueOf() === date.valueOf()) ? [ ...times, entry.time ] : times;
  }
  const stayAliveEvents = journal.reduce(addFirstFromDay, []).map(time => makeEvent('still-alive', time));

  events.push.apply(events, stayAliveEvents);

  return events.sort(sortByTime);
};

const findInteractions = journal => {
  const meetings = journal.filter(entry => entry.type === MEETING);

  const interactions = {
    lastMeeting: undefined,
    meetingsTotal: undefined
  };

  if (meetings.length > 0) {
    interactions.lastMeeting = makeInteraction(meetings[meetings.length - 1].time, 0);
    interactions.meetingsTotal = makeInteraction(meetings.length, 1);
  }

  return interactions;
};

const findNotifications = journal => {
  const notifications = [];

  const nthEntryAdded = (n, content) => {
    if (journal.length >= n)
      notifications.push(makeNotification(content, journal[n - 1].time));
  }

  nthEntryAdded(1, 'entry-1');
  nthEntryAdded(2, 'entry-2');
  nthEntryAdded(5, 'entry-5');
  nthEntryAdded(10, 'entry-10');
  nthEntryAdded(20, 'entry-20');
  nthEntryAdded(50, 'entry-50');
  nthEntryAdded(100, 'entry-100');
  nthEntryAdded(200, 'entry-200');
  nthEntryAdded(500, 'entry-500');
  nthEntryAdded(1000, 'entry-1000');

  return notifications.sort(sortByTime);
};

const analyseJournal = journal => {
  return {
    events: findEvents(journal),
    interactions: findInteractions(journal),
    notifications: findNotifications(journal)
  };
};

export default analyseJournal;
