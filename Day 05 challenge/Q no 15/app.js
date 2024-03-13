var newguest = ["Ali", "Faique", "Wajid"];
// replace wajid with new guest. the first number in the splice bracket show the index number of the array.
// Naeem replace faique because faique is at the index number 1. second number in the splice bracket show that
// how many number will be relapced. foe example if we put number 2 at the second number then it also delete wajid from the array.
newguest.splice(1, 1, "Naeem");
// this for loop take names individual from array and show the message given below
for (var i = 0; i < newguest.length; i++) {
    console.log("Hello! \"".concat(newguest[i].toUpperCase(), "\" i want to dinner with you tonight are you agree?"));
}
