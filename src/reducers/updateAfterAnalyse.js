import analyseJournal from '../analysis/analysis';
import { updateAnalysis } from '../model/state';

const updateAfterAnalyse = reducer => (state, action) => {
  const newState = reducer(state, action);
  const newAnalysis = analyseJournal(newState.journal || []);
  return updateAnalysis(newState)(newAnalysis);
};

export default updateAfterAnalyse;
