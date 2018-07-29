function forEach(someFunction, array) {
  for (let i=0; i<array.length; i++) {
    someFunction(array[i]);
  }
}

function functionAlpha(element) {
  console.log(`Alpha function with element: ${element}`);
}
function functionBeta(element) {
  console.log(`Beta function with element: ${element}`);
}

myArray = ["dog", "cat", "Christmas", "Burger King", "sweaters"];
console.log("ForEach with Alpha");
forEach(functionAlpha, myArray);
console.log("ForEach with Beta");
forEach(functionBeta, myArray);
