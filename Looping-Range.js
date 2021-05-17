const range = (start, end, step) => {
  let numsArray = [];
  if(start != undefined && end != undefined && step != undefined && end > -1 & step > 0 && end > start){
    for(let index = start; index <= end; index = index + step) {
      numsArray.push(index);
    }
    return numsArray;
  }
  else return numsArray;
};
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
