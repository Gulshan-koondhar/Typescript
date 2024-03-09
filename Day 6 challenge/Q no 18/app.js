var countries = ["Italy", "Turkey", "Canada", "Germany", "England"];
console.log("Original List of Countries:, ", countries);
console.log("Reversed order: ", countries.reverse());
// List in Alphabetical Order
console.log("List of Countries in Alphabetical order:, ", countries.sort());
// list in Reverse order
var reverseorder = countries.sort().reverse();
console.log("List of Countries in Reverse order of Alphabetical order:, ", reverseorder);
// List in Reverse order respective of Original list
console.log("List of Countries in Reverse with respective to Original List:, ", reverseorder.reverse());
