/* Q no 42:- Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by
adding the phrase the Great to each magician’s name.
Call show_magicians() to see that the list has actually been modified.

 */
var magicians = ["Alice", "David", "Chris"];
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
    ;
}
make_great(magicians); // Modifies the original array
show_magicians(magicians); // Shows modified names
