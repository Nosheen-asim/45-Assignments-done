"use strict";
function makeSandwich(...items) {
    console.log("\nMaking a sandwich with the following items:\n");
    items.forEach(singleItem => console.log(singleItem));
    console.log("Now Enjoy Sandwich");
}
makeSandwich("Bread", "Butter");
makeSandwich("chicken", "cheese", "Egg");
makeSandwich("Bread", "Butter", "Chicken", "Tomato", "Cheese", "Egg", "Mayo");
