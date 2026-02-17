//      coding challenge 1

/* Mark and John are trying to compare their BMI(Body Mass Index)
 , which is calculated using the formula: BMI = mass/height^2 or use mass / (height * height)
 (mass in kg and height in meters).

  1. Store Mark's and John's mass and height in variables.
  2. Calculate both their BMIs.
  3. Create a boolean variables containing information about whether Mark has a higher BMI
      John.
  4. Print a string to the console containing the variables from step 3. (Something like
      "Is  Marks's BMI higher than John's? true").
*/

console.info("\n\n\n\n\t\t\t\t\t Challenge 1");

let mark = {
  mass: 75,
  height: 1.73,
  bmi: function () {
    return bmi(this.mass, this.height);
  },
};

function bmi(mass, height) {
  return mass / Math.pow(height,2);
}

let john = Object.assign({}, mark); //create a shallow copy of mark
john.mass = 95;
john.height = 1.86;

console.log(mark.bmi());
console.log(john.bmi());

let higherBMI =
  mark.bmi() > john.bmi()
    ? "Mark has a higher BMI than John"
    : "John has a higher BMI than Mark";

console.log(higherBMI);

