var guest_List = ["Krishna", "Vijay", "Aamir", "Adnan", "Mehran"];
console.log("Unfortunately, I can only invite three people for dinner");
while (guest_List.length > 3) {
    var removed_guest = guest_List.pop();
    console.log("Sorry ".concat(removed_guest, ", I can't invite you on this dinner."));
}
for (var i = 0; i < guest_List.length; i++) {
    console.log("Jani ".concat(guest_List[i], ", you are invite for the dinner"));
}
console.log("Total number of people invited for dinner is: ".concat(guest_List.length));
