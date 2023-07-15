/*Math.max(arg1,arg2,arg3.......argN) - returns the greatest of the arguments
	Object.assign(dest,src1, ... srcN) - copies properties from src1..N into dest
	A function can be called any number of times no matter how it is defined.
*/

function sum(a,b){
	return a + b;
}
console.log( sum(1,2,3,4,5));

function sumAll(...args) {
	let sum = 0;
	var a = [1,2];
	for ( let arg of args ) {
	 sum+=arg;
	}
	console.log(sum);
	// return sum;
}

sumAll(1,2,3,4,5,6,7);
sumAll(1,2);
sumAll(1);

// we can choose to show first argments separate but 
// rest parameteres are at end

function showName(firstName, lastName, ...titles){
	console.log(firstName + " " + lastName);
	console.log(titles[0]);
	console.log(titles[1]);
	console.log(titles.length);
}

showName("Julius","Caeser", "Consul", "Imperator");
// the rest gather all remaining arguments , so rest must always be at last


function showName2(){
	console.log(arguments[0]);
	console.log(arguments[1]);
	console.log(arguments[2]);
	console.log(arguments[3]);
}

showName2("Julius Caesar","a","b","c","d");
showName2("A","A");



function f(){
	let x = () => {
		console.log(arguments[0])
	}
	x();
}

f("A");

let arr1 = [3,5,1];
console.log(Math.max(...arr1))
let arr2 = [1,3,4];
console.log(Math.max(...arr2));
console.log(Math.max(...arr1,24,...arr2))

//let arr = [3,5,1];
//let arrr2 = [8,9,15];

let merged = [0, ...arr1,2,  ...arr2];
console.log(merged);

let str = "Hello";
let strArray1 = [...str];
let strArray2 = Array.from(str);
console.log(strArray1);
console.log(strArray2);


let arr4 = [1,3,4];
let arr5  = [...arr4];

console.log(arr5);
//console.log(JSON.stringify(arr5));


let obj = { a: 1, b: 2, c: 3};
let objCopy = { ...obj };
console.log(JSON.stringify(obj) == JSON.stringify(objCopy));
console.log(obj == objCopy)
obj.c = 4;
console.log(obj);
console.log(objCopy);





















