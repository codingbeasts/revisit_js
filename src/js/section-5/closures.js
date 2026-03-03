printTitle("closures");
function retire(year) {
  const age = "many years left for you";
  return function (name) {
    return `${name} has ${new Date().getFullYear() - year} ${age}`;
  };
}

// console.log(retire(1995)('dipanshu'));
const dipanshuRetire = retire(1995);

console.log(dipanshuRetire("dipanshu"));

printHeading("Counter");
function Counter(count) {
  this.increment = function () {
    return count++;
  };
  this.decrement = function () {
    return count--;
  };
}

tenCount = new Counter(10);
console.log(tenCount.increment());
console.log(tenCount.increment());
console.log(tenCount.increment());
console.log(tenCount.increment());
console.log(tenCount.increment());
