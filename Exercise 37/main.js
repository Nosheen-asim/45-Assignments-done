"use strict";
function make_shirt(size = "large", printMessage = "I love typescript") {
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`);
}
make_shirt();
make_shirt("Medium");
make_shirt("small", "I love Javascript");
