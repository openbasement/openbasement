export const makeMeeting = (data, id) => {
  const { content, time } = data;
  return {
    type: 'meeting',
    id: id,
    content: content,
    time: time
  };
};

export const makeMood = (data, id) => {
  const { content, mood, time } = data;
  return {
    type: 'mood',
    id: id,
    content: content,
    mood: mood,
    time: time
  };
};

export const makeNote = (data, id) => {
  const { content, time } = data;
  return {
    type: 'note',
    id: id,
    content: content,
    time: time
  };
};
