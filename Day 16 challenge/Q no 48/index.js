// Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. 
// Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
var pricesSet1 = [1200, 1500, 1100];
var pricesSet2 = [1000, 1300, 1600];
var combinedPrices = pricesSet1.concat(pricesSet2).sort();
console.log(combinedPrices);
