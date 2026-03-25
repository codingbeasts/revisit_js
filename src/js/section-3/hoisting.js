printTitle("Section 3 How Javascript works");
printHeading("Hoisting");

calculateAge(1997); //normal function or function statement does support hoisting

function calculateAge(year) {
  console.log("Calculate Age - ", 2023 - year);
}

// retirement(1997); // arrow function and function expression,anonymous function doesn't support hoisting

var retirement = function (year) {
  console.log("Year left in retirement : " , (65 - (2025 - year)));
};
retirement(1997);

/*[Hoisting in let, const and var with TDZ]*/

printHeading("Hoisting in let, const and var with TDZ");
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
printHeading(
  "Checking whether how hoisting affect behaviour of variable passed as value in function & " +
    "as reference",
);

//change(); and change(objDipanshu) both work for this function
// function change() {
//   objDipanshu.username = "dipanshu";
//   fullname = "deepanshushora";
//   console.log("Without parameter function");
// }

//change(); this will work in this function because the parameter expects obj and it also uses inside it.

 function change(obj) {
   obj.username = "dipanshu";
   fullname = "deepanshushora";
  console.log('With parameter function');
 }
// change(objDipanshu);

let objDipanshu = { username: "deepanshu", lastname: "shora" };
var fullname = "mr.shora";

/*
 why works simple because the objDipanshu and fullname are exists before
 the calling of change function change(objDipanshu); 
 use change(objDipanshu) or change() will change the object parameter
*/

console.log(objDipanshu);
console.log(fullname);

// the hoisting and lexical scoping

console.log("\n\n\n\n\n ");

function aFun() {
  // console.log("The value of b : " + b);
  return "The value of b : " + b;
}

var b = 20;
console.log(aFun());
