let faker = require("faker");

console.log("===================");
console.log("WELCOME TO MY SHOP!");
console.log("===================");

for (let i=0; i<10; i++) {
    let productName = faker.fake("{{commerce.productName}}");
    let price = faker.fake("{{commerce.price}}");
    console.log(`Buy ${productName} at $${price} each!`);
}
