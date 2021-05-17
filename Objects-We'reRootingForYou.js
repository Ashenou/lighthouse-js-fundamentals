const judgeVegetable = (vegetables, metric) => {
  let highestVeggieMetric = 0;
  let highestVeggie = "";

  
  for (const veggie of vegetables) {
    
    if (veggie[metric] > highestVeggieMetric) {
      highestVeggieMetric = veggie[metric];
      highestVeggie = veggie;
    }
  }
  
  //console.log(typeof highestVeggie.submitter);
  let submitterName = highestVeggie.submitter;
  return submitterName;
};
const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5,
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8,
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3,
  },
];
const metric = "redness";
console.log(judgeVegetable(vegetables, metric));