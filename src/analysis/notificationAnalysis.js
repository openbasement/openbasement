import { asDay, sortByTime } from '../analysis/common';
import { makeNotification } from '../model/analysis';
import { MOOD } from '../model/const';

const nthEntry = (journal, n, content) => journal.length > n ? [makeNotification(content, journal[n - 1].time)] : [];
const nthEntryEvents = journal => [
  ...nthEntry(journal, 1, 'entry-1'),
  ...nthEntry(journal, 2, 'entry-2'),
  ...nthEntry(journal, 5, 'entry-5'),
  ...nthEntry(journal, 10, 'entry-10'),
  ...nthEntry(journal, 20, 'entry-20'),
  ...nthEntry(journal, 50, 'entry-50'),
  ...nthEntry(journal, 100, 'entry-100'),
  ...nthEntry(journal, 200, 'entry-200'),
  ...nthEntry(journal, 500, 'entry-500'),
  ...nthEntry(journal, 1000, 'entry-1000')
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
  return moods.reduce(moodyDay, []).map(time => makeNotification('moody-day', time));
};

const notificationAnalysis = journal => [
  ...nthEntryEvents(journal),
  ...moodyDayEvents(journal)
].sort(sortByTime);

export default notificationAnalysis;
