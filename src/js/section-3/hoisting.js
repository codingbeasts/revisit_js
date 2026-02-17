console.info("\n\n\n\n\n \t\t\t\t\tSection 3 How Javascript works.");
console.info("\n\n\n\n\t\t\t\tHoisting");

calculateAge(1997); //normal function or function statement does support hoisting

function calculateAge(year) {
  console.log("Calculate Age - ", 2023 - year);
}

// retirement(1997); // arrow function and function expression,anonymous function doesn't support hoisting

var retirement = function (year) {
  console.log("Year left in retirement : " + (65 - (2025 - year)));
};
retirement(1997);

/*[Hoisting in let, const and var with TDZ]*/

console.info("\n\n\n\n\t\t\t\tHoisting in let, const and var with TDZ");
// console.log(myage);// undefined due to inaccessible before declaration.
var myage = 2023 - 1997; // 26
function callAgeBefore() {
  console.log("new Age : ", newage);
}
let newage;
newage = 30;
callAgeBefore();
var foo = () => {
  // console.log(myage);
  // var myage = 65;
  myage = 65;
  return myage;
};
console.log("function scoped - ", foo());
console.log("global scoped - ", myage);

/*[Checking whether how hoisting affect behaviour of variable passed as value in function & as reference]*/
console.info(
  "\n\n\n\n\n \t\t\t\t\tChecking whether how hoisting affect behaviour of variable passed as value in function & " +
    "as reference",
);

//change(); and change(obj) both work for this function
function change() {
  obj.username = "dipanshu";
  fullname = "deepanshushora";
  console.log("Without parameter function");
}

//change(); this will work in this function because the parameter expects obj and it also uses inside it.
/* 
 function change(obj) { 
   obj.username = "dipanshu";
   fullname = "deepanshushora";
  console.log('With parameter function');
 }
 */

let obj = { username: "deepanshu", lastname: "shora" };
var fullname = "mr.shora";

/*
 why works simple because the obj and fullname are exists before
 the calling of change function change(obj); use change(obj) or 
 change() will change the object parameter*/
change();

console.log(obj);
console.log(fullname);

// the hoisting and lexical scoping

console.log("\n\n\n\n\n ");

function aFun() {
  // console.log("The value of b : " + b);
  return "The value of b : " + b;
}

var b = 20;
console.log(aFun());
