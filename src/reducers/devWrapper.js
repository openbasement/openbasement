import { RESET_STORE } from '../actions/const';
import { initialState } from '../model/state';
import { resetData } from '../persistence/persistence';

function resetState() {
  resetData();
  return initialState;
}

const devWrapper = reducer => (state, action) => (action.type === RESET_STORE) ? resetState() : reducer(state, action);

export default devWrapper;
