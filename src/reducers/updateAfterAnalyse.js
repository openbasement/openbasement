import analyseJournal from '../analysis/Analysis';
import { updateAnalysis } from '../model/State';

const updateAfterAnalyse = reducer => (state, action) => {
  const newState = reducer(state, action);
  const newAnalysis = analyseJournal(newState.journal || []);
  return updateAnalysis(newState)(newAnalysis);
};

export default updateAfterAnalyse;
