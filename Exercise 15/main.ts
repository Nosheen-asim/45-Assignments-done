let guestList : string[] =["Noreen","Nazia","Saba","Nisha"]

//print the name who is not invited for dinner.
let  notDeserving: string = guestList.splice(0,1)[0];
console.log(`${notDeserving} not invited for dinner`);

//push
guestList.push("Linzy");

//print a message
guestList.forEach(guest => {
    console.log(`Dear ${guest} ,you are invited to dinner.`);
    
})