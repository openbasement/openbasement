export const initialState = {
  journal: [],
  events: [],
  interactions: {},
  notifications: [],
  ui: {}
};

export const updateJournal = journal => entry => [...journal, entry];

// replace events by entries :P

export const updateEvents = events => entries => [...entries]; // eslint-disable-line no-unused-vars

// merge interactions with entries :P
export const updateIntegrations = interactions => entries => ({ ...interactions, ...entries });

export const updateNotifications = notifications => entries => {
  // replaces notifications with new model, where read state is preserved
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
