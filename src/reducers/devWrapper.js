import { RESET_STORE } from '../actions/const';
import { initialState } from '../model/State';
import { resetData } from '../persistence/Persistence';

function resetState() {
  resetData();
  return initialState;
}

const devWrapper = reducer => (state, action) => (action.type === RESET_STORE) ? resetState() : reducer(state, action);

export default devWrapper;
