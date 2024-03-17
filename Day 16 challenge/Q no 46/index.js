// Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and 
// a method describe() that logs a sentence about the laptop.
var laptop = {
    make: "Lenovo",
    model: "vPro",
    year: 2021,
    describe: function () {
        console.log("This laptop's make is ".concat(this.make, ", model is ").concat(this.model, " and year is ").concat(this.year));
    }
};
laptop.describe();
