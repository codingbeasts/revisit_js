console.info("\n\n\n\n \t\t\t\t\tJavascript Basic Operators.");

var year, yearDipanshu;

now = 2022;
ageDipanshu = 25;
ageJatin = 26;
isMarried = false;
//Math Operators
yearDipanshu = now - ageDipanshu;

yearJatin = now - ageJatin;

console.log(yearDipanshu);
console.log(yearJatin);

var l = 12;
var b = 19;

var s = 4;

console.log("Area of Square : "+ s * s);
console.log("Area of Rectangle : " + l * b);

console.log("Perimeter of Rectangle : " + 2 * (l + b));

console.log("Length - Breadth : "+(l-b));

console.log("Length / Breadth : "+(l/b));

var whoIsOlder = ageDipanshu > ageJatin;

x=null;
console.log(whoIsOlder);

console.info("\n\n\n\n\t\t\t\t\tUse of typeof function in js : ")
console.log(typeof(ageDipanshu));

console.log(typeof(isMarried));

console.log(typeof("This is typeof operator"));
var x;
x=null;
console.log(typeof(x));
