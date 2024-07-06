let guestList: string[] =["Nazia", "Saba","Nisha","Linzy"];
console.log("Great news! we found a bigger table.")

//unshift
guestList.unshift("Hina");

//splice()
guestList.splice(Math.floor(guestList.length/2),0, "Inshal");


//push
guestList.push("sawera");

guestList.forEach(guest =>{
 console.log(`Dear ${guest}, you all are invited to dinner.`);
    
})



