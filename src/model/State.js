export const initialState = {
  journal: [],
  events: [],
  interactions: {},
  notifications: [],
  ui: {}
};

export const updateJournal = journal => entry => [ ...journal, entry ];

// eslint-disable-next-line no-unused-vars
export const updateEvents = events => entries => {
  // replace events by entries :P
  return [ ...entries ];
}

export const updateIntegrations = interactions => entries => {
  // merge interactions with entries :P
  return { ...interactions, ...entries };
}

export const updateNotifications = notifications => entries => {
  // replaces notifications with new model, where read state is preserved
  const read = notifications.filter(notification => notification.read);
  const isRead = entry => read.find(matched => matched.content === entry.content && matched.time === entry.time);
  function preserveReadState(entry) { return { ...entry, read: isRead(entry) }; }
  return entries.map(preserveReadState);
}

export const updateAnalysis = state => entries => {
  return {
    ...state,
    events: updateEvents(state.events)(entries.events || initialState.events),
    interactions: updateIntegrations(state.interactions)(entries.interactions || initialState.interactions),
    notifications: updateNotifications(state.notifications)(entries.notifications || initialState.notifications)
  };
}
