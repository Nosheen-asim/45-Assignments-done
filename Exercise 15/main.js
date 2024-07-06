var guestList = ["Noreen", "Nazia", "Saba", "Nisha"];
//print the name who is not invited for dinner.
var notDeserving = guestList.splice(0, 1)[0];
console.log("".concat(notDeserving, " not invited for dinner"));
//push
guestList.push("Linzy");
//print a message
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, " ,you are invited to dinner."));
});
