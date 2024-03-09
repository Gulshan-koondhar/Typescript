let guest_List = ["Krishna", "Vijay", "Aamir", "Adnan","Mehran"];

console.log("Unfortunately, I can only invite three people for dinner");

while(guest_List.length > 3){
    let removed_guest = guest_List.pop();
    console.log(`Sorry ${removed_guest}, I can't invite you on this dinner.`);
}

for(let i = 0; i < guest_List.length; i++){
    console.log(`Jani ${guest_List[i]}, you are invite for the dinner`);
}