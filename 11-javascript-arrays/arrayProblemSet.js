// printReverse
function printReverse(array) {
  for (let i=array.length-1; i >= 0; i--) {
    console.log(array[i]);
  }

}

function isUniform(array) {
  let check = array[0];
  let isUniform = true;

  for (let i=1; i<array.length; i++) {

    if (array[i] !== check) {
      isUniform = false;
    }
  }

  return isUniform;
}

function sumArray(array) {
  let sum = 0;
  array.forEach(function(e) {
    sum += e;
  })
  return sum;
}

function max(array) {
  let max = 0;
  for (let i=0; i<array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}


//testing
console.log("Test printReverse");
printReverse([1,2,3,4]);
printReverse(["a","b","c"]);

console.log("Test isUniform");
console.log(isUniform([1,1,1,1]));
console.log(isUniform([2,1,1,1]));
console.log(isUniform(["a","b","p"]));
console.log(isUniform(["b","b","b"]));

console.log("Test sumArray");
console.log(sumArray([1,2,3]));
console.log(sumArray([10,3,10,4]));
console.log(sumArray([-5,100]));

console.log("Test max");
console.log(max([1,2,3]));
console.log(max([10,3,10,4]));
console.log(max([-5,100]));
