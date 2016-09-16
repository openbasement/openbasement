import { MEETING, MOOD, NOTE } from '../model/const';

export const makeMeeting = (data, id) => {
  const { content, time } = data;
  return {
    type: MEETING,
    id: id,
    content: content,
    time: time
  };
};

export const makeMood = (data, id) => {
  const { content, mood, time } = data;
  return {
    type: MOOD,
    id: id,
    content: content,
    mood: mood,
    time: time
  };
};

export const makeNote = (data, id) => {
  const { content, time } = data;
  return {
    type: NOTE,
    id: id,
    content: content,
    time: time
  };
};
