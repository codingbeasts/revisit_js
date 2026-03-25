printTitle("Javascript Mutation and Type Coercion");
/* Type conversion (also known as type casting) refers to the general process of changing a value from one data type to another. This can be done either explicitly (manually by the programmer) or implicitly.
 Type coercion refers specifically to implicit type conversion, where the compiler or runtime environment automatically converts a value's data type without explicit instructions from the programmer.*/

printHeading("Type Coercion");
var firstName = "Dipanshu";
var lastName = "Shora";
var age = 25;
var job = "Programmer";
var isMarried = false;

console.log(
  "This is example of type coercion where data type automatically converts to string without explicit conversion : " +
    firstName +
    " is " +
    age +
    " years old " +
    job +
    ". Is he married? " +
    isMarried,
);
printHeading("Type coercion vs strict equality operator");
console.log("this is type coercion problem age == '25' : ", age == "25");
console.log(
  "this is type coercion with strict equality === '25' : ",
  age === "25",
);
printHeading("Variable Mutation");

age = "Twenty Five";
job = "Web Developer";
console.log("Value of age " , age);
console.log("Value of job " , job);

/*
alert(
   firstName + " is " + age + " years old " + job + ". Is he married? " + isMarried
);

var last = prompt("Enter Your Last Name : ");
console.log(firstName+ ' '+ last);
*/

printTitle("EXPLICIT Type Conversion");

printHeading("--- String to Number ---");

let strInt = "42";
let strFloat = "3.14";
let strInvalid = "Hello";

console.log(Number(strInt)); // 42 (The clean way)
console.log(parseInt(strInt)); // 42 (Good for integers)
console.log(parseFloat(strFloat)); // 3.14 (Good for decimals)
console.log(Number(strInvalid)); // NaN (Not a Number)
console.log(+strInt); // 42 (Unary plus - the "shortcut")

printHeading("--- Number/Boolean to String ---");

let num = 100;
let bool = true;

console.log(String(num)); // "100"
console.log(num.toString()); // "100"
console.log(String(bool)); // "true"
console.log(String(null)); // "null" (String() handles null/undefined safely)

printHeading("--- To Boolean (Truthiness) ---");

// Falsy values (convert to false)
console.log(Boolean("")); // false
console.log(Boolean(0)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false

// Truthy values (convert to true)
console.log(Boolean("Hello")); // true
console.log(Boolean(42)); // true
console.log(Boolean([])); // true (Empty arrays are true!)
console.log(Boolean({})); // true (Empty objects are true!)

printHeading("--- Practical Calculation ---");

let price = "19.99";
let quantity = "5";

/* Without conversion: "19.99" * "5" works because of coercion, 
 BUT "19.99" + "5" would result in "19.995" (string concatenation).
 Always convert to be safe:
*/
let total = Number(price) * Number(quantity);
console.log("Total Price: $" + total.toFixed(2));
