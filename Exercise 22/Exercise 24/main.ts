//Creating a variable
let apple ="apple";

//Test for equality
console.log("apple is equal to apple");
console.log(apple == "apple");

//Test for inequality
console .log("apple is not equal to apple ");
console.log(apple  != "apple");

//Test using the lower case function
let uppercaseApple ="APPLE"

//Equal to
console.log("APPLE is equal to apple after converting to lowercase");
console.log(uppercaseApple.toLocaleLowerCase() == "apple");

//Not equal to

console.log("APPLE is not equal to apple after converting to lowercase");
console.log(uppercaseApple.toLocaleLowerCase() != "apple");

//Numerical Tests involving equality and inequality,greater than and less than,greater than and equal to,less than and equal to

let ten = "10";
let twenty = "20";

//Equal to
console.log("ten is equal to twenty");
console.log(ten == twenty);

//Not equal to
console .log("ten is not equal to twenty");
console.log(ten != twenty);

//Greater than
console.log("twnety is greater than ten ");
console.log(twenty > ten);

//less than
console.log('twenty is less than ten');
console.log(twenty < ten);

//Greater than or equal to
console.log("twenty is grater or equal to ten");
console.log(twenty  >=  ten);

//Test using "and" and "or" operators
//using && (and)
console.log("twenty is not equal to ten and twenty is greater than ten");
console.log(twenty != ten && twenty > ten);

console.log("twenty is not equal to ten and ten is greater than twenty");
console.log(twenty != ten && ten > twenty);

//using || (or)
console.log("twenty is grater than ten or twenty is not equal to twenty");
console.log(twenty > ten || twenty != twenty);
console.log("twenty is less than ten or twenty is not equal to enty");
console.log(twenty < ten || twenty != twenty);


//Less than or equal to
console.log("twenty is less than or equal to ten");
console.log(twenty <= ten);



























