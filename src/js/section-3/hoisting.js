console.log("\n\n\n\n\n \t\t\t\t\tSection 3 How Javascript works.");
console.log("\n\n\n\n\t\t\t\tHoisting");

calculateAge(1997); //normal function does support function expression

function calculateAge(year){
    console.log('Calculate Age - ',2023-year);
}

// retirement(1997); // arrow function and function expression doesn't support hoisting

var retirement = function(year){
    console.log('Year left in retirement : '+ (65-(2025-year)));
};
retirement(1997);

console.log("\n\n\n\n\t\t\t\tHoisting in let, const and var with TDZ");
// console.log(myage);// undefined due to inaccessible before declaration.
var myage = 2023-1997; // 26
function callAgeBefore(){
    console.log('new Age : ',newage);
}
let newage;
newage = 30;
callAgeBefore();
var foo = () => {
    // console.log(myage);
    // var myage = 65;
    myage = 65;
    return myage;
}
console.log('function scoped - ',foo());
console.log('global scoped - ',myage);


