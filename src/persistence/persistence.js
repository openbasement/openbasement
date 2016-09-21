const localStorageKey = 'openbasement-store';

export function persistData(state) {
  localStorage[localStorageKey] = JSON.stringify(state);
}

export function retrieveData(initialState) {
  const json = localStorage[localStorageKey];
  if (!json) {
    return initialState;
  }
  const parsed = JSON.parse(json);
  return parsed ? { ...initialState, ...parsed } : initialState;
};

export function resetData() {
  localStorage[localStorageKey] = JSON.stringify({});
}
