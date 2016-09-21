import { combineReducers } from 'redux';

import addEntry from '../reducers/addEntry';
import changeUi from '../reducers/changeUi';
import hideNotification from '../reducers/hideNotification';
import updateAfterAnalyse from '../reducers/updateAfterAnalyse';
import devWrapper from '../reducers/devWrapper';

const noop = empty => state => state || empty;

const reducers = {
  journal: addEntry,
  events: noop([]),
  interactions: noop({}),
  notifications: hideNotification,
  ui: changeUi
};
const combinedReducers = combineReducers(reducers);
const enhancedReducer = updateAfterAnalyse(combinedReducers);
const devModeReducer = devWrapper(enhancedReducer);

module.exports = devModeReducer;
