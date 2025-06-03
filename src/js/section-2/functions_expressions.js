console.log("\n\n\n\n\t\t\t\t\t Functons Expressions");

// function expression
//
var occupation = function (firstName, occupt) {
  switch (occupt) {
    case "teacher":
      return firstName + " teaches kids how to code";
    case "driver":
      return firstName + " drives ula";
    case "designer":
      return firstName + " designs beautiful websites";
    default:
      return firstName + " does something else";
  }
};


console.log(occupation('Jatin','berozgar'));

console.log(occupation('Dipanshu','programmer'));


