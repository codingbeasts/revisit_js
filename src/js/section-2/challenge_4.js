console.log("\n\n\n\n\t\t\t\tChallenge 4");

/*
 * Let's remember the firs coding challenge where Mark and John compared their BMIs. Let's now
 * implement the same functionanlity with objects and methods.
 *
 * 1. For each of them create an object with properties for their full name, mass and height.
 * 2. Then, add a method to each object to calculate their BMIs and save BMIs to the object and
 *    also return if from the method.
 * 3. In the end, log to the console who has the highest BMI, together with the full name and the
 *    respective BMI. Don't forget they might have the same BMI.
 *
 *
 *  Remember : BMI = mass/ height^2.
 * */

const BMI_details = function (fname, lname, m, h) {
  this.firstName = fname;
  this.lastName = lname;
  this.mass = m;
  this.height = h;
  this.bmi = function () {
    return this.mass / Math.pow(this.height, 2);
  };
};

const markP = new BMI_details("Mark", "Smith", 95, 1.85);
const johnP = new BMI_details("John", "Smith", 87, 1.68);
// john.mass = 95;
// john.height = 1.85;
// mark.mass = 109;


console.log(markP, johnP);
console.log(markP.bmi());
console.log(johnP.bmi());

var highBMI = function (mBmi, jBmi) {
  if (mBmi() > jBmi()) {
    return `${markP.firstName} ${markP.lastName} has a BMI of ${mBmi()} and higher then ${johnP.firstName}.`;
  } else if (jBmi > mBmi) {
    return `${johnP.firstName} ${johnP.lastName} has a BMI of ${jBmi()} and higher than ${markP.lastName}.`;
  } else {
    return "Both have got same BMIs";
  }
};

console.log(highBMI(markP.bmi, johnP.bmi));
