function isEven(num) {
  let isEven = true;
  if (num % 2 != 0) {
    isEven = false;
  }
  return isEven;
}

function factorial(num) {
  if (num != 0) {
    for (let i=num-1; i>0; i--) {
      num *= i;
    }
  }
  return num;
}

function kebabToSnake(kebab) {
  return kebab.replace(/-/g,"_")
}

// Test isEven
console.log("Test isEven");
console.log(isEven(4));
console.log(isEven(21));
console.log(isEven(68));
console.log(isEven(333));

// Test factorial
console.log("Test factorial");
console.log(factorial(5));
console.log(factorial(2));
console.log(factorial(10));
console.log(factorial(0));

// Test kebabToSnake
console.log("Test kebabToSnake");
console.log(kebabToSnake("hello-world"));
console.log(kebabToSnake("dogs-are-awesome"));
console.log(kebabToSnake("blah"));
