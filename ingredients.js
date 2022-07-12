const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
for (const i of ingredients){
  console.log(i);
}
// Write a for loop that prints out the contents of ingredients:
const length = ingredients.length;
let i = 0;
while(i<length){
  console.log(ingredients[i]);
  i++;
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
i = ingredients.length - 1;
while(i>0){
  console.log(ingredients[i]);
  i--;
}