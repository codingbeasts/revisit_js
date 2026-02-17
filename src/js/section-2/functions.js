console.info("\n\n\n\n\t\t\t\t\t Functions");

function calcAge(currentYear, birthYear) {
  return currentYear - birthYear;
}

var ageDipanshu = calcAge(2024, 1997);
var ageJatin = calcAge(2024, 1997);
var ageSiddhant = calcAge(2024, 1996);

console.log(
  "Age of Dipanshu, Jatin, Siddhant : " +
    ageDipanshu +
    " " +
    ageJatin +
    " " +
    ageSiddhant
);

function retirement(cyear, year, firstname) {
  var age = calcAge(cyear, year);
  var retired = 65 - age;
  return retired > 0
    ? firstname + " retires in " + retired + " years."
    : firstname + " is already retired.";
}

console.log(retirement(2024, 1997, "Dipanshu"));

console.log(retirement(2024, 1998, "Lakshay"));
console.log(retirement(2024, 1956, "Siddhant"));
console.log(retirement(2024, 1997, "Jatin"));


console.info("\n\n\n\n\t\t\t\t\t Types of Functions in functional programming.");



console.info("\n\n\t\tBasic function");
function hello(name){
    return `hi ${name}`;
}
console.log(hello('dipanshu'));


console.info('\n\n\t\tFunction expression or Anonymous Function');
const war = function(country_1,country_2){
    return `${country_1} is doing war with ${country_2}`;
}
console.log(war('Pakistan','India'));

console.info('\n\n\t\tArrow Function');
const water = (country)=>{
    return `${country} has stop it's water`;
};

console.log('India');

console.info('\n\n\t\tIIFE - Immediately Invoked Function Expression');
(function(name){console.log('This is my surname '+name)})('Shora');


console.info('\n\n\t\tPure Function');
function pureFun(year){
    return new Date().getFullYear() - year;
}
console.log('My Age is :',pureFun(1997));

console.info('\t\t\t\t\t\tThis is generative function in js');
function* countToThree() {
  yield 1;
  yield 2;
  yield 3;
}

const counter = countToThree();

console.log(counter.next()); // { value: 1, done: false }
console.log(counter.next()); // { value: 2, done: false }
console.log(counter.next()); // { value: 3, done: false }
console.log(counter.next()); // { value: undefined, done: true }

