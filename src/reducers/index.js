import { combineReducers } from 'redux';
import { i18nReducer } from 'react-redux-i18n';

import addEntry from './addEntry';
import changeUi from './changeUi';
import hideNotification from './hideNotification';
import journalUpdated from './journalUpdated';
import updateAfterAnalyse from './updateAfterAnalyse';
import devWrapper from './devWrapper';

const noop = empty => state => state || empty;

const reducers = {
  journal: addEntry,
  journalVersion: journalUpdated,
  events: noop([]),
  interactions: noop({}),
  notifications: hideNotification,
  ui: changeUi,
  i18n: i18nReducer
};
const combinedReducers = combineReducers(reducers);
const enhancedReducer = updateAfterAnalyse(combinedReducers);
const devModeReducer = devWrapper(enhancedReducer);

module.exports = devModeReducer;
