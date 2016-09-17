/* Combine all available reducers to a single root reducer.
 *
 * CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import { combineReducers } from 'redux';
import addEntry from '../reducers/addEntry';
import hideNotification from '../reducers/hideNotification';
import updateAfterAnalyse from '../reducers/updateAfterAnalyse';
import devWrapper from '../reducers/devWrapper';
/* Populated by react-webpack-redux:reducer */
const reducers = {
  journal: addEntry,
  events: state => state || [],
  interactions: state => state || {},
  notifications: hideNotification
};
const combinedReducers = combineReducers(reducers);
const enhancedReducer = updateAfterAnalyse(combinedReducers);
const devModeReducer = devWrapper(enhancedReducer);
module.exports = devModeReducer;
