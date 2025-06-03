console.log(
  "\n\n\n\n\n \t\t\t\t\tSection 4 Javascript DOM Manipulation and events."
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

console.log(
  "\n\n\n\n\n \t\t\t\t\tTesting variables related to let, const and var"
);
// let n = 20,
//   n1 = 1;
// var n2 = 2;
// const n3 = 3;
// console.log(n);

//     // let n;  //redeclaration of n not allowed like const.
//     // n=40;
// function showlet() {
//     let n;  //Redeclare n using let instialise new scope inside function.
//     n=40;
//     console.log(n); 
//     const n3 = 50;
//     console.log(n3);
// }

// showlet();
// console.log(n);
// console.log(n1, n2, n3);


// let al = 10;
// if(true){
//     let al = 20;
//     console.log("Output from Inside function "+al);
// }

// console.log("Output from Outside function "+al);


// let cum = 2;
// // let cum = 4;
// var cumming = 4;
// var cumming = 5;
// console.log(cum,cumming);

