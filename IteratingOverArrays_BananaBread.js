const ingredients = [
  "eggs",
  "milk",
  "flour",
  "sugar",
  "baking soda",
  "baking powder",
  "chocolate chips",
  "bananas",
];

// Write a while loop that prints out the contents of ingredients:
let index = 0;
while (index < ingredients.length) {
  console.log(ingredients[index]);
  index++;
}
// Write a for loop that prints out the contents of ingredients:
for (let x = 0; x < ingredients.length; x++) {
    console.log(ingredients[x]);
    
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let x = ingredients.length-1; x >-1; x--) {
    console.log(ingredients[x]);
}
