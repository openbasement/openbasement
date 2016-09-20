export const asDay = (time) => {
  const date = new Date(time);
  date.setHours(0, 0, 0, 0);
  return date;
};

export const addFirstTimeFromDay = (times, entry) => {
  const date = asDay(entry.time);
  const dates = times.map(asDay);
  return !dates.find(d => d.valueOf() === date.valueOf()) ? [...times, entry.time] : times;
};

export const sortByTime = (a, b) => Date.parse(a) - Date.parse(b);
