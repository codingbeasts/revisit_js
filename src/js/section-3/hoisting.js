console.log("\n\n\n\n\n \t\t\t\t\tSection 3 How Javascript works.");
console.log("\n\n\n\n\t\t\t\tHoisting");

calculateAge(1997); //normal function does support function expression

function calculateAge(year){
    console.log(2023-year);
}

retirement(1997); // arrow function and function expression doesn't support hoisting

var retirement = function(year){
    console.log('Year left in retirement : '+ (65-(2023-year)));
};

console.log(myage);
var myage = 2023-1997; // 26

function foo(){
    // console.log(myage);
    var myage = 65;
    console.log(myage);
}

foo();
console.log(myage);
