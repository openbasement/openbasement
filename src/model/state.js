export const initialState = {
  journal: [],
  journalVersion: 0,
  events: [],
  interactions: {},
  notifications: [],
  ui: {},
  i18n: { locale: 'en' }
};

export const updateJournal = journal => entry => [...journal, entry];

// replace events by entries :P
export const updateEvents = events => entries => [...entries]; // eslint-disable-line no-unused-vars

// merge interactions with entries :P
export const updateIntegrations = interactions => entries => ({ ...interactions, ...entries });

// replaces notifications with new model, where read state is preserved
export const updateNotifications = notifications => entries => {
  const read = notifications.filter(notification => notification.read);
  const isRead = entry => read.find(matched => matched.content === entry.content && matched.time === entry.time);
  function preserveReadState(entry) { return { ...entry, read: isRead(entry) }; }
  return entries.map(preserveReadState);
};

export const updateAnalysis = state => entries => {
  return {
    ...state,
    events: updateEvents(state.events)(entries.events || initialState.events),
    interactions: updateIntegrations(state.interactions)(entries.interactions || initialState.interactions),
    notifications: updateNotifications(state.notifications)(entries.notifications || initialState.notifications)
  };
};

export const mapStateToProps = state => state;
