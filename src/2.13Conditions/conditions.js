export const conditions = (a, b) => {
  if (a === b) {
    return "Равны";
  }
  if (a > b) {
    return "Больше";
  }
  return "Меньше";
};

export const check = (a, b) => {
  return a > b ? a : b;
};
