import { asDay, sortByTime } from './common';
import { makeNotification } from '../model/analysis';
import { MOOD } from '../model/const';

const nthEntry = (journal, n, content) => journal.length > n ? [makeNotification(content, journal[n - 1].time)] : [];
const nthEntryEvents = journal => [
  ...nthEntry(journal, 1, 'notifications.1th-entry'),
  ...nthEntry(journal, 2, 'notifications.2th-entry'),
  ...nthEntry(journal, 5, 'notifications.5th-entry'),
  ...nthEntry(journal, 10, 'notifications.10th-entry'),
  ...nthEntry(journal, 20, 'notifications.20th-entry'),
  ...nthEntry(journal, 50, 'notifications.50th-entry'),
  ...nthEntry(journal, 100, 'notifications.100th-entry'),
  ...nthEntry(journal, 200, 'notifications.200th-entry'),
  ...nthEntry(journal, 500, 'notifications.500th-entry'),
  ...nthEntry(journal, 1000, 'notifications.1000th-entry')
];

const moodyDayEvents = journal => {
  const moods = journal.filter(entry => entry.type === MOOD);
  const moodyDay = (times, entry) => {
    const date = asDay(entry.time);
    const earlierSameDayDifferentMood = moods
        .filter(mood => Date.parse(entry.time) > Date.parse(mood.time))
        .filter(mood => asDay(mood.time).valueOf() === date.valueOf())
        .filter(mood => mood.mood !== entry.mood);
    return earlierSameDayDifferentMood.length > 0 ? [...times, entry.time] : times;
  };
  return moods.reduce(moodyDay, []).map(time => makeNotification('notifications.moody-day', time));
};

const analyseForNotifications = journal => [
  ...nthEntryEvents(journal),
  ...moodyDayEvents(journal)
].sort(sortByTime);

export default analyseForNotifications;
