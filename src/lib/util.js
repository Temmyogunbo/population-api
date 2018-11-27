export const findTotalResidents = (male, female) => {
  let total;
  try {
    total = male + female;
  } catch (error) {
    return error;
  }
  return total;
};

export default findTotalResidents;
