import { combineReducers } from 'redux';
import { i18nReducer } from 'react-redux-i18n';

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
  ui: changeUi,
  i18n: i18nReducer
};
const combinedReducers = combineReducers(reducers);
const enhancedReducer = updateAfterAnalyse(combinedReducers);
const devModeReducer = devWrapper(enhancedReducer);

module.exports = devModeReducer;
