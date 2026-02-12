/*[Checking Output with timeout function ]*/

console.log("\n\n\n\n\n \t\t\t\t\tsetTimout Closure Example");
function callsetTO() {
  // if we don't want to use let then create a new function and simply pass it inside the for loop
  for (var i = 0; i < 5; i++) {
    newST(i);
  }
}
function newST(num) {
  setTimeout(function () {
    console.log(num + 1);
  }, num * 1000);
}

callsetTO();




console.log("\n\n\n\n\n\t\t\t\tGarbage Collection in js");
function gCollection() {
  var xmm = 0;
  return xmm;
}
console.log(gCollection());

function outEvent() {
  let i = 0;
  return function () {
    i > 5 ? i = null : ++i;
    console.log("click : ", i);
  };
}
document.getElementById("clickyyy").addEventListener("click", outEvent());

