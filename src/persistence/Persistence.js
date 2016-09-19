const localStorageKey = 'openbasement-store';

export function persistData(state) {
  localStorage[localStorageKey] = JSON.stringify(state);
}

export function retrieveData(initialState) {
  const json = localStorage[localStorageKey];
  if (json) {
    const parsed = JSON.parse(json);
    return { ...initialState, ...parsed };
  } else {
    return initialState;
  }
};

export function resetData() {
  localStorage[localStorageKey] = JSON.stringify({});
}
