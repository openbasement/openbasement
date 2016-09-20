import EventAnalysis from '../analysis/EventAnalysis';
import InteractionAnalysis from '../analysis/InteractionAnalysis';
import NotificationAnalysis from '../analysis/NotificationAnalysis';

const Analysis = journal => ({
  events: EventAnalysis(journal),
  interactions: InteractionAnalysis(journal),
  notifications: NotificationAnalysis(journal)
});

export default Analysis;
