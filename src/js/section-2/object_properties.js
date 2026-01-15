console.log("\n\n\n\n\t\t\t\tObject and Properties");
// creating object and properties using Object Initialiser or Object literal
const jatin = {
  firstName: "Jatin",
  lastName: "Ahuja",
  birthyear: 1997,
  family: ["Ashok", "Rama", "Akshay"],
  job: "Manager",
  isMarried: true,
};
console.log(jatin.firstName);

// const jatin_1 = jatin;
// jatin_1.firstName = "pakro";
// console.log(jatin_1);
// console.log(jatin);

// let test = "test";
// function testing() {
//   test = "test in a function";
// }

// testing();

// console.log(test);

console.log(`Name : ${jatin.firstName}`);
(function () {
  jatin.job = "Majdoori";
})(); //iife
console.log(`Job : ${jatin.job}`);
console.log(jatin);

// create object using new Object() function
const dipanshu = new Object();
dipanshu.firstName = "Dipanshu";
dipanshu.lastName = "Shora";
dipanshu.birthyear = 1997;

console.log('\n\nObject from new Object method : ',dipanshu);

// another way for creating object
var siddhant = new Object({
  firstName: (value = "Siddhant"),
  lastName: (value = "Singh"),
  birthyear: (value = 1996),
});
console.log('\n\nObject from new Object method with properties inside : ',siddhant);

// creating function using Constructor and new keyword
function Details(fn, ln, by, fy, jo, im) {
  this.firstName = fn;
  this.lastName = ln;
  this.birthyear = by;
  this.family = fy;
  this.job = jo;
  this.isMarried = im;
}

const lakshay = new Details(
  "Lakshay",
  "Vinayak",
  1998,
  ["Mother", "Father", "Brother"],
  "Content Moderator",
  true
);
console.log('\n\nObject from Function Constructor : ',lakshay);

// create object using create method
//
const sagar = Object.create(lakshay, {
});
sagar.firstName =  "Sagar";
 sagar.birthyear = 1992;
console.log('\n\nObject from object.Create method will not create any shallow copy or deep copy: ',sagar);

// create object using a shallow copy of an object using assign keyword

const lassay = Object.assign({}, lakshay);
lassay.firstName = 'lassy';
lassay.lastName = 'shora';
console.log('\n\nObject from Object.assign : ',lassay);

Details.prototype.retireAge = function(cy){
    return cy - this.birthyear;
}
