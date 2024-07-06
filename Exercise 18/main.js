"use strict";
let placeTovisit = ["Paris", "Italy", "London", "China", "Australia"];
//print in original order
console.log("Original order:", placeTovisit);
//print your array in alphabetical order.
console.log("Alphabetical order:", placeTovisit.slice().sort());
//Array is still in its original order
console.log("Alphabetical order:", placeTovisit.slice().sort());
console.log("Original order after sorting:", placeTovisit);
//print  array in reverse alphabetical order without changing the order of the original list,
console.log("Reverse alphabetical order:", placeTovisit.slice().sort().reverse());
// array is still in its original order.
console.log("Original order after reverse sorting:", placeTovisit);
//reverse the order of list
placeTovisit.reverse();
console.log('Reverse order:', placeTovisit);
//reverse the order of the list again.
placeTovisit.reverse();
console.log('Back to original order:', placeTovisit);
//sort your array so its stored in alphabetical order
console.log("sorted in alphabetical order:", placeTovisit.slice().sort());
//sort to change array so its stored in reverse alphabetical order.
console.log("Stored in reverse alphabetical order:", placeTovisit.slice().sort().reverse());
