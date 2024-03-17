// Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops, 
// each with properties make, model, and year, use array destructuring to 
// assign the first and second laptops to variables. Then, log these variables.
var laptops = [
    { make: "Dell", model: "XPS 12", year: 2021 },
    { make: "HP", model: "vPro", year: 2015 },
    { make: "Apple", model: "M1 Air", year: 2022 }
];
//First Method
console.log("First Method");
var firstLaptop = laptops[0], secondlaptop = laptops[1];
console.log(firstLaptop);
console.log(secondlaptop);
//Second Method
console.log("Second Method");
var laptop1 = laptops[0];
var laptop2 = laptops[1];
console.log(laptop1);
console.log(laptop2);
