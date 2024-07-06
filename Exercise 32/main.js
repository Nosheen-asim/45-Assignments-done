"use strict";
let current_users = ["Nisha", "nazia", "Noreen", "saba", "Areeba"];
let new_users = ["Asim", "Aqib", "Nazia", "Nomi", "Saba"];
new_users.forEach(new_one_user => {
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLocaleLowerCase());
    if (our_condition) {
        console.log(`Sorry ${new_one_user} is already taken!`);
    }
    else {
        console.log(`This Username ${new_one_user} is available!`);
    }
});
