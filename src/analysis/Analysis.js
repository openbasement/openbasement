import { MEETING } from '../model/const';
import { makeEvent, makeInteraction, makeNotification } from '../model/Analysis';

const findEvents = journal => {
	const nthEntryAdded = (n, content) => {
		if (journal.length >= n)
		  events.push(makeEvent(content, journal[n-1].time));
	}

	const events = [];

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

	// TODO. sort events by time

  return events;
};

const findInteractions = journal => {
  journal.filter(entry => entry.type === MEETING);
  return {};
};

const findNotifications = journal => {
  journal.filter(entry => entry.type === MEETING);
  return [];
};

const analyseJournal = journal => {
  return {
    events: findEvents(journal),
    interactions: findInteractions(journal),
    notificatons: findNotifications(journal)
  };
};

export default analyseJournal;
