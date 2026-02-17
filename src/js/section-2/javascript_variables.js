console.info("\n\n\n\n\n \t\t\t\t\tSection 2 Javascript variables.");
// code of javascript_variables.js starts from here
var firstName = 'dipanshu';
var lastName = 'shora';

// print first name and last name in console
console.log(firstName);

console.log(lastName);

var age = 25;

// checking age of person whether is he old or not
if (age >= 25)
{
    console.log("quite old enough");
}
else
{
    console.log(
    "not old enough"
    );
}

/*[Overwriting variable using let and var]*/

 let cum = 2;
 var cumming = 4;
 var cumming = 5;
 console.log(cum,cumming);


/*[checking undefined vs not defined]*/
let apple;
// if removed the declaration the console statement says not defined reference error
// but with declaration it say undefined if not initialised
apple = 'apple';
console.log(apple);


var fullAge = true;
// checking boolean age in if else if condition
if (fullAge === true && age > 25){
    console.log("Mature");
}
else if (fullAge === true && age < 25) {
    console.log("Not Mature");
}
else if (fullAge === true && age === 25){
    console.log("25 yrs old");
}
else{
    console.log("nothing");
}

// checking person age and boolean in switch statement
switch(true){
    case fullAge === true && age > 25:
        console.log("yes you are mature");
    break;
    case fullAge === true && age < 25:
        console.log("yes you are not mature");
    break;
    case fullAge === true && age === 25:
        console.log("yes you are 25 yrs old");
    break;
    default:
        console.log("no you aren't mature");
}



var job;

job = 'programmer';


console.log('type of fullage : ' + typeof(fullAge));
console.log('type of age : ' + typeof(age));

console.log('Job : ' + typeof(job));

job = "developer";
console.log(job);



