import analyseJournal from '../analysis';
import { updateAnalysis } from '../model/state';

const updateAfterAnalyse = reducer => (state, action) => {
  const newState = reducer(state, action);
  if (newState.journal !== state.journal) {
    const newAnalysis = analyseJournal(newState.journal || []);
    return updateAnalysis(newState)(newAnalysis);
  } else {
    return newState;
  }
};

export default updateAfterAnalyse;
