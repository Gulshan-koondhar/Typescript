// Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and 
// a method describe() that logs a sentence about the laptop.


let laptop = {
    make : "Lenovo",
    model : "vPro",
    year : 2021,
    describe : function(){
        console.log(`This laptop's make is ${this.make}, model is ${this.model} and year is ${this.year}`);
    }
}

laptop.describe();