let magicians: string[] = ["Alice", "David", "Chris"];

function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
function show_magicians(magicians: string[]) {

    for (let i=0; i<magicians.length; i++){
        console.log(magicians[i]);
        
    };
}
make_great(magicians); // Modifies the original array
show_magicians(magicians); // Shows modified names