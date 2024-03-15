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
