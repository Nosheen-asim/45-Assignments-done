"use strict";
//starpattern using do while loope
let rows = 5; // Number of rows for the triangular pattern
let i = 0;
do {
    let j = 0;
    let stars = "";
    do {
        stars += "*";
        j++;
    } while (j <= i);
    console.log(stars);
    i++;
} while (i < rows);
