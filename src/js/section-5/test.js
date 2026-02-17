/*[Section 4 Javascript DOM Manipulation and events.]*/

console.log(
  "\n\n\n\n\n \t\t\t\t\tSection 4 Javascript DOM Manipulation and events.",
);
console.log("\n\n\n\n\n\t\t\t\ttest");

var country = ["India", "Germany", "Crotia", "Japan"];

function showItem(arr, fn) {
  var result = [];
  arr.forEach((val) => {
    result.push(fn(val));
  });
  return result;
}

function printItem(it) {
  return it;
  // console.log(it);
}

function num1() {
  return 2;
}
function num2() {
  return 4;
}

var a = (num1(), num2());

console.log(a);
console.log(showItem(country, printItem));

const myCaptial = "live in New Delhi";

const str1 = country.includes("many");
const str2 = country.includes("ndia");

const str3 = myCaptial.includes("i");

console.log(str1, str2, str3);

/*[Testing variables related to let, const and var]*/

console.log(
  "\n\n\n\n\n \t\t\t\t\tTesting variables related to let, const and var in respective to functional scoped vs block scoped",
);
let n = 20,
  n1 = 1;
var n2 = 2;
const n3 = 3;
console.log(
  "Output value before any execution N : ",
  n,
  " N1 : ",
  n1,
  " N2 : ",
  n2,
  " N3 : ",
  n3,
);

// var n2;  //redeclaration of n not allowed like const.
// n2=40;
function showlet() {
  var n; //Redeclare n using var instialise new scope inside function.
  n = 0; // redeclaration of value of n
  let n1 = 11; //Redeclare n using let instialise new scope inside function.
  const n2 = 22; //Redeclare n using const instialise new scope inside function.
  const n3 = 33; //Redeclare n3 using const instialise new scope inside function.
  console.log(
    "Output value Inside function N : ",
    n,
    " N1 : ",
    n1,
    " N2 : ",
    n2,
    " N3 : ",
    n3,
  );
}

showlet();
console.log(
  "Output value after function execution N : ",
  n,
  " N1 : ",
  n1,
  " N2 : ",
  n2,
  " N3 : ",
  n3,
);

/*[Checking value with if statement and after statement]*/

/* var al = 10;
 if(true){
     var al = 20;
     console.log("Output from Inside if statement "+al);
 }*/

// console.log("Output from Outside if statement "+al);

var al = 10;
if (true) {
  var al = 20;
  /* let al = 20; // let and const inside locked scope act as new variable
  but not var
  that's why we use this let and const in loops and first class functions */
  console.log("Output from Inside if-statement " + al);
}

console.log("Output from Outside if-statemeent " + al);
console.log("\bvar doesn't respect block scoped\b");

/* const al = 10;
 if(true){
     let al = 20;// let and const inside a
      // blocked scope act as new variable
      // but not var
     // const al = 20;
     console.log("Output from Inside function "+al);
 }*/

// console.log("Output from Outside function "+al);



/*[Overwriting variable using let and var]*/

 let cum = 2;
 // let cum = 4;
 var cumming = 4;
 var cumming = 5;
 console.log(cum,cumming);


// checking undefined vs not defined
let apple;
// if removed the declaration the console statement says not defined reference error
// but with declaration it say undefined if not initialised

// console.log(apple);
//block and shadowing.

var australia = "australia ";

function printBlockScope() {
  var australia = "United Kingdom slave country";
  const bharat = "india";
  let canada = "canada";
  console.log(australia, ", ", bharat, ", ", canada);
}
printBlockScope();
console.log(australia);
// blocked scoped of function doesn't affect var outside of function

// console.log(australia, ", ", bharat, ", ", canada);

/* does affect blocked-scoped if not part of function scope
and let and const stays unaffected even in block-scoped or function-scoped.*/
