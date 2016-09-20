import EventAnalysis from '../analysis/eventAnalysis';
import InteractionAnalysis from '../analysis/interactionAnalysis';
import NotificationAnalysis from '../analysis/notificationAnalysis';

const analysis = journal => ({
  events: EventAnalysis(journal),
  interactions: InteractionAnalysis(journal),
  notifications: NotificationAnalysis(journal)
});

export default analysis;
