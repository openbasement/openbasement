import analyseForEvents from './analyseForEvents';
import analyseForInteractions from './analyseForInteractions';
import analyseForNotifications from './analyseForNotifications';

module.exports = journal => ({
  events: analyseForEvents(journal),
  interactions: analyseForInteractions(journal),
  notifications: analyseForNotifications(journal)
});
