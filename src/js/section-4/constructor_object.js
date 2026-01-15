console.log("\n\n\n\n\n\t\t\t\tobject using constructor");
// const Person = function (name, year, job) {
//   this.name = name;
//   this.year = year;
//   this.job = job;
// };
class Person {
  constructor(name, year, job) {
    this.name = name;
    this.year = year;
    this.job = job;
  }
}

console.log(Person);
console.log(typeof Person);

// function FMCG(name,license,year){
//     this.name  = name;
//     this.license = license;
//     this.year = year;
// }

const FMCG = function (name, license, year) {
  this.name = name;
  this.license = license;
  this.year = year;
};
const cocola = new FMCG("coca", "Pvt Ltd.", 1945);
const pepsi = new FMCG("pepsico", "llc", 1955);

// FMCG.prototype.companyAge = function () {
//   return parseInt(new Date().getFullYear()) - this.year;
// };
// console.log(new Date().getFullYear());

// console.log(`${cocola.name} is ` + cocola.companyAge() + " years old.");
// console.log(`${pepsi.name} is ` + pepsi.companyAge() + " years old.");
