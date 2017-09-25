export const daysToGo = (end_date) => {
  return (daydiff(new Date(), new Date(end_date)));
};

const daydiff = (date1, date2) => {
  return Math.round((date2-date1)/(1000*60*60*24));
};

export const totalBacked = (backings) => {
  if (backings) {
    return backings.map(backing => backingAmount(backing))
    .reduce(function(sum, value) {
      return (sum + value);
    }, 0);
  }
};

const backingAmount = backing => (
  backing.backing_amount
);

export const addCommas = (num) => (
  num.toLocaleString()
);

export const percentFunded = (goal_amount, backings) => (
  Math.floor((totalBacked(backings) / goal_amount) * 100)
);
