// 1. Print all numbers between -10 and 19
console.log("Exercise 1");
for (let i = -10; i <= 19; i++) {
  console.log(i);
}

console.log("Exercise 2");
// 2. Print all even numbers between 10 and 40
for (let i = 10; i <= 40; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

console.log("Exercise 3");
// 3. Print all odd numbers between 300 and 333
for (let i = 300; i <= 333; i++) {
  if (i % 2 == 1) {
    console.log(i);
  }
}

console.log("Exercise 4");
// 4. Print all numbers divisible by 5 AND 3 between 5 and 50
for (let i = 5; i <= 50; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i);
  }
}
