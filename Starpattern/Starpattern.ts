 //starpattern using do while loope

 let rows: number = 5 // Number of rows for the triangular pattern
 let i: number = 0;

 do {
    let j :number = 0
    let stars: string = "";
    do {
        stars += "*";
        j++;
    }while(j<= i);
    console.log(stars);
    i++;
    
 }while (i <rows);