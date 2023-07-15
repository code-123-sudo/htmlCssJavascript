{
	let message = "Hello";
	console.log(message);
}
//console.log(message);
// error as exptected


{
	// show message
	let message = "Hello";
	console.log(message);
}

{
	// show another message
	let message = "GoodBye";
	console.log(message);
}
// if for and while , inside variables are only visible inside
if (true){
	let phrase = "Hello!";
	console.log(phrase);
}
//console.log(phrase);

for ( let i = 0; i < 3 ; i++) {
	console.log(i);
}
// console.log(i);
function sayHiBye(firstName, lastName) {
	function getFullName(){
		return firstName + " " + lastName;
	}
	console.log("Hello " + getFullName());
	console.log("Bye " + getFullName());
}
sayHiBye("Shishir","Jain");

// function makeCounter(){
// 	let count = 0;
// 	return function(){
// 		return count++;
// 	}
// }
// let counter = makeCounter();
// console.log(counter);
// console.log(counter);
// console.log(counter);
// console.log(counter());
// console.log(counter());
// console.log(counter());


// exercises
let name = "John";
function sayHi(){
	console.log("Hi, " + name);
}
name = "Pete";
sayHi();

// function makeWorker(){
// 	let name = "Pete";
// 	return function(){
// 		console.log(name);
// 	}
// }

// let name = "John";
// let work = makeWorker();
// work();

function makeCounter() {
	let count = 0;
	return function(){
		return count++;
	}
}

// let counter = makeCounter();
// let counter2 = makeCounter();

// console.log(counter());
// console.log(counter());

// console.log(counter2());
// console.log(counter2());









// function Counter(){
// 	let count = 0;
// 	this.up = function(){
// 		return ++count;
// 	}
// 	this.down = function(){
// 		return --count;
// 	}
// }

// let counter = new Counter();
// console.log(counter.up());
// console.log(counter.up());
// console.log(counter.down());

let phrase = "Hello";
if(true) {
	let user = "John";
	function sayHi() {
		console.log(`${phrase}, ${user}`);
	}
}
sayHi();













