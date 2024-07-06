"use strict";
let guestList = ["Hina", "Nazia", "Inshal", "Saba", "Nisha", "Linzy", "Sawera"];
//print a message
console.log("unfortunately! the new dinner table will not arrive so we can invite only two guest.");
//remove guest from the list
while (guestList.length > 2) {
    let removeGuest = guestList.pop();
    if (removeGuest !== undefined) {
        console.log(`Sorry ${removeGuest},we cant invite you.`);
    }
}
//print a message
guestList.forEach(guest => {
    console.log(`Dear ${guest},you are still invited for the dinner.`);
});
//remove last two names from the list.
guestList.splice(0, guestList.length);
//print updated empty list.
console.log("updated list of guest:", guestList);
