console.log("\n\n\n\n \t\t\t\t\tJavascript Mutation and Type Coercion.");
// Type conversion (also known as type casting) refers to the general process of changing a value from one data type to another. This can be done either explicitly (manually by the programmer) or implicitly.
// Type coercion refers specifically to implicit type conversion, where the compiler or runtime environment automatically converts a value's data type without explicit instructions from the programmer.
console.log("\n \t\t\t\t\tType Coercion");
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
console.log('\n\n\n\n\n \t\t\t\t\tType coercion vs strict equality operator');
console.log("this is type coercion problem age == '25' : ", age == '25');
console.log("this is type coercion with strict equality === '25' : ", age === '25');

console.log("\n\n\n\n\n \t\t\t\t\tVariable Mutation");

age = "Twenty Five";
job = "Web Developer";

// alert(
//   firstName + " is " + age + " years old " + job + ". Is he married? " + isMarried
// );

// var last = prompt("Enter Your Last Name : ");
// console.log(firstName+ ' '+ last);


console.log('\n\n\n\n\n \t\t\t\t\tEXPLICIT Type conversion');



