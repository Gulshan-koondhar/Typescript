let guest_List = ["Krishna", "Vijay", "Aamir", "Adnan","Mehran"];

console.log("Unfortunately, I can only invite three people for dinner");

// this while loop shows whic people are removed

while(guest_List.length > 3){
    let removed_guest = guest_List.pop();
    console.log(`Sorry ${removed_guest}, I can't invite you on this dinner.`);
}

// this show the people who are invited for the dinner

for(let i = 0; i < guest_List.length; i++){
    console.log(`Jani ${guest_List[i]}, you are invite for the dinner`);
}

// this line show the total number of people invited for the dinner

console.log(`Total number of people invited for dinner is: ${guest_List.length}`);
