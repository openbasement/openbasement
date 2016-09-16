import { applyMiddleware } from 'redux';

import configureStore from 'stores';
import initialState from '../model/State';
import { persistData, retriveData } from '../persistence/Persistence';

const initialize = initialState => {
  console.log('retrieving data from cache with fallback:', initialState);
  const state = retriveData(initialState);
  console.log('state resolved to: ', state);
  return state;
};

const middleware = store => next => action => {
  console.log('dispatching', action);
  const result = next(action);
  const state = store.getState();
  persistData(state);
  console.log('next state', state);
  return result;
};

const PersistentStore = () => configureStore(initialize(initialState), applyMiddleware(middleware));

export default PersistentStore;
