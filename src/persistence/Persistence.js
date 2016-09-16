const localStorageKey = 'openbasement-store';

export const persistData = state => localStorage[localStorageKey] = JSON.stringify(state);

export const retrieveData = initialState => {
  const json = localStorage[localStorageKey];
  if (json) {
    const parsed = JSON.parse(json);
    return { ...initialState, ...parsed };
  } else {
    return initialState;
  }
};

export const resetData = () => localStorage[localStorageKey] = JSON.stringify({});
