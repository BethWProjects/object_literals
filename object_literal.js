// List of Grocery stores items, assigning a variable to an object. 
var safeway = {
  apples: 50,
  bananas: 25,
  watermelon: 10,
  lemons: 100,
  limes: 78
}

console.log(safeway.apples);
console.log(Object.keys(safeway));
console.log(Object.values(safeway));
console.log(safeway.oranges = 23);
console.log(safeway.apples = true);

// Tweet example to assign a variable to an Object.
var tweet1 = {
  name: "Leira Sanchez",
  email: "leia@test.com",
  message: "Hello World",
  active: true
}

console.log(Object.values(tweet1));
console.log(Object.keys(tweet1));
console.log(tweet1.name);
console.log(tweet1.email);
console.log(tweet1.message);
console.log(tweet1.active);
