const lastIndexOf = (array, element) => {
  let index = -1;
  for (let x = 0; x < array.length; x++) {
    if (element === array[x]) {
      index = x;
    }
  }
  return index;
};
console.log(lastIndexOf([0, 1, 4, 1, 2], 1), "=?", 3);
console.log(lastIndexOf([0, 1, 4, 1, 2], 2), "=?", 4);
console.log(lastIndexOf([0, 1, 4, 1, 2], 3), "=?", -1);
console.log(lastIndexOf([5, 5, 5], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
