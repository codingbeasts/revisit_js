printTitle("Types of objects");
const siddhu = {
  name: "siddhant",
  age: 28,
};

const dipu = siddhu;
dipu.name = "dipanshu";

console.log("Copy one object to another : " + dipu.name, siddhu.name);

printHeading("Create Object using : new Object()");
const jatinMammu = new Object({
  name: (value = "jatin"),
  lastName: (value = "ahuja"),
  age: 28,
});
console.log(
  "Output from new Object with properties defined inside of it : " +
    jatinMammu.name +
    " " +
    jatinMammu.lastName +
    ` and his last age ${jatinMammu.age}`,
);

printHeading("Create Object using : Constuctor function(){}");

const Family = function (members, name, age) {
  this.members = members;
  this.name = name;
  this.age = age;
};
const dipanshu_family = new Family(
  4,
  ["dipanshu", "babita", "nandkishore", "mansi"],
  [27, 55, 63, 25],
);
console.log(dipanshu_family);
printHeading("Create Object using Object.assign");
const objAssignInside = Object.assign(
  {},
  {
    name: (value = "jatin"),
    age: 28,
  },
);
console.log(
  "Object Assign with properties defined inside of it.",
  objAssignInside,
);

printHeading(
  "Create shallow copy of Object using Object.assign({},objectfromcopy)",
);
const objShallow = Object.assign({}, objAssignInside);

console.log(
  "Object Assign with properties defined using another object ",
  objShallow,
);

printHeading("Creating Object using : Objet.create method"); // this will not create shallow copy or deep copy
const objCreate = Object.create(objAssignInside);
objCreate.name = "Dipanshu Shora";
console.log(
  "Object Create using objAssignInside : ",
  objCreate,
  objAssignInside,
);

printHeading("Creating Object using : Factory Functions");
function personDetail(name, age) {
  return {
    name,
    age,
  };
}

const dipanshuDetails = personDetail("dipanshu shora", 28);
const jatinDetails = personDetail("jatin ahuja", 28);
console.log(dipanshuDetails, jatinDetails);

const original = { name: "Dipanshu", age: 27 };
const obj = JSON.parse(JSON.stringify(original));
