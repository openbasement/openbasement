export const makeEvent = (content, time, read = false) => {
  return {
    content: content,
    time: time
  };
};

export const makeInteraction = content => {
  return { content: content };
};

export const makeNotification = (content, time, read = false) => {
  return {
    content: content,
    time: time,
    read: read
  };
};
