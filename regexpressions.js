let str = "+7(903)-123-45-67";
let regexp = /\d/g;
let match  = str.match(regexp);
console.log(match);

let str2  = "Is there CSS4?";
let regexp2 = /CSS\d/g;
console.log(str2.match(regexp2));

let str3 = "I LOVE HTML5".match(/\s\w\w\w\w\d/);
console.log(str3);

let str4 = "+7(903)-123-45-67";
console.log(str4.replace(/\D/g,""));

let regexp5 = /CS.4/;
console.log("CSS4".match(regexp5));
console.log("CS-4".match(regexp5));
console.log("CS 4".match(regexp5));

console.log("A\nB".match(/A.B/));
console.log("A\nB".match(/A.B/s))

console.log("1 - 5".match(/\d-\d/));
console.log("1-5".match(/\d-\d/));
console.log("1 - 5".match(/\d - \d/));

// Character     Unicode           Bytescount in Unicode
// a               0x0061          2
// =               0x2248          2
// x               0x1d4b3         4
// y               0x1d4b4         4
// smile           0x1f604         4

console.log('ab'[1])
console.log('b'.length)











