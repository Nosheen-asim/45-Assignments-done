let userNames =["Nisha","Saba","Admin","Nazia","Noreen"]

userNames.forEach(oneUser => {
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, would you like to see a status report?`);
        
    }else{
        console.log(`Hello ${oneUser}, thank you for logging in again`);
        
    }
})
