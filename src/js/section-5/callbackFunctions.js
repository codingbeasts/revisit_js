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
console.log("Garbage Collection Example : " + gCollection());

let clickState;
clickState = true;
function outEvent() {
  if (clickState) {
    let i = 0;
    return function () {
      i >= 5 ? (clickState = false) : ++i;
      console.log("click : ", i);
    };
  }
}

// button in index.html is commmented
// document.getElementById("clickyyy").addEventListener("click", outEvent());
