console.info("\n\n\n\n\t\t\t\t\t Switch Statement");

// var job = prompt(
//   "Enter your job positon from given below choice \n\t \
//     teacher, driver, designer, instructor"
// );
job = 'teacher';
var result;

switch (job) {
  case "teacher":
    result = "teaches kids how to code";
    break;

  case "driver":
    result = "drives an uber in New Delhi";
    break;
  case "designer":
    result = "designs beautiful websites";
    break;
  case "instructor":
    result = "gives instruction to student";
    break;
  default:
    result = "does something else";
}

console.log("Lakshay " + result);
