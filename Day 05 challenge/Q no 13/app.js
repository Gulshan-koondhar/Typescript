var favtransport = ["Yamaha Bike", "Haval H6 Car", "Aeroplane"];
for (var i = 0; i < favtransport.length; i++) {
    console.log("I would like to travel through ".concat(favtransport[i]));
}
// let arrayNames = ["Ameen", "Ali","Sajid", "Rafiq", "Kashif"];
// for( let arr = 0; arr < arrayNames.length; arr++){
//     console.log(arrayNames[arr]);
// }
favtransport.forEach(function (i) {
    console.log("I would like to travel through ".concat(i));
});
