let guestList = ["Vijay", "Adnan", "Krishna"];

// add another guest at the start of the array

guestList.unshift("Mehran");

// add another guest in the middle of the array


guestList.splice(2,0,"Aamir");

//add another guest at the end of the array

guestList.push("Ali");

for(let i = 0; i < guestList.length; i++){
    console.log(`Hello ${guestList[i]}, would you like to have dinner with me?`);
    
}