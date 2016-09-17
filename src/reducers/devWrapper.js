import { RESET_STORE } from '../actions/const';
import { initialState } from '../model/State';
import { resetData } from '../persistence/Persistence';

const devWrapper = reducer => (state, action) => {
	if (action.type === RESET_STORE) {
		resetData();
		return initialState;
	} else
		return reducer(state, action);
};

export default devWrapper;
