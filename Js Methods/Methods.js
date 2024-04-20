//! Array-Methods

//! let newArray = [10 , -10 , True , "Hello world"];


let newArray = [5 , 1 , 4 , 3 , 2];

console.log(newArray.sort());

//? => [1 , 2 , 3 , 4 , 5];


console.log(newArray.reverse());

//? => [5 , 4 , 3 , 2 , 1];


console.log(newArray.length());

//? => 4


console.log(newArray.push(6));

//? => [1 , 2 , 3 , 4 , 5 , 6];

console.log(newArray.pop());

//? => [1 , 2 , 3 , 4];

console.log(newArray.unshift(6));

//? => [6 , 1 , 2 , 3 , 4 , 5];

console.log(newArray.shift());

//? => [2 , 3 , 4 , 5];


console.log(newArray.indexOf(4));

//? => 3


console.log(newArray.fill(3));

//? => [3 , 3 , 3 , 3 , 3];


console.log(newArray.toString());

//? => "1 , 2 , 3 , 4 , 5"


console.log(newArray.concat(["hello" , "world"]));

//? => [1 , 2 , 3 , 4 , 5 , "hello" , "world"];


console.log(Array.isArray(newArray));

//? => True


console.log(newArray.join("*"));

// =>  old = 1 , 2 , 3 , 4 , 5

//? => New = 1 * 2 * 3 * 4 * 5