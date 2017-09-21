export const daysToGo = (end_date) => {
  return (daydiff(new Date(), new Date(end_date)));
};

const daydiff = (date1, date2) => {
  return Math.round((date2-date1)/(1000*60*60*24));
};
