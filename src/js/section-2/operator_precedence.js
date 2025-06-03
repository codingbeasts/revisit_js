console.log("\n\n\n\n \t\t\t\t\t Operator Precedence");

var now = 2023;
var yearDipanshu = 1997;
var fullAge = 25;
// multiple operator
var isFullAge = now - yearDipanshu >= fullAge;

console.log(isFullAge);
// grouping
var ageDipanshu = now - yearDipanshu;

var ageJatin = 26;

var averageAge = (ageDipanshu + ageJatin) / 2;

console.log(averageAge);


// multiple assignments

var x,y;
x = y = (3+5) * 4 - 6;

console.log(x,y);

x = x * 2;

console.log(x);
