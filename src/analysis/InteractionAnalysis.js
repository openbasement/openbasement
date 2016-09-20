import { MEETING } from '../model/const';
import { makeInteraction } from '../model/Analysis';

const emptyInteractions = {
  lastMeeting: undefined,
  meetingsTotal: undefined
};

const findInteractions = meetings => meetings.length === 0 ? emptyInteractions : ({
  ...emptyInteractions,
  lastMeeting: makeInteraction(meetings[meetings.length - 1].time, 0),
  meetingsTotal: makeInteraction(meetings.length, 1)
});

const InteractionAnalysis = journal => findInteractions(journal.filter(entry => entry.type === MEETING));

export default InteractionAnalysis;
