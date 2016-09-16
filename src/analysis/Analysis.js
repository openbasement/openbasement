import { updateAnalysis } from '../model/State';

export const analyseJournal = journal => {
	console.log('analysing journal');

	return {
		events: [],
		interactions: {},
		notificatons: []
	};
};

export const updateAfterAnalyse = state => {
  const newAnalysis = analyseJournal(state.journal);
  return updateAnalysis(state)(newAnalysis);
};
