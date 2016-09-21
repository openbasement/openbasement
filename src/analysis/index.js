import analyseForEvents from '../analysis/analyseForEvents';
import analyseForInteractions from '../analysis/analyseForInteractions';
import analyseForNotifications from '../analysis/analyseForNotifications';

module.exports = journal => ({
  events: analyseForEvents(journal),
  interactions: analyseForInteractions(journal),
  notifications: analyseForNotifications(journal)
});
