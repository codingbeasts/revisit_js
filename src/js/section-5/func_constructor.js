console.info(
  "\n\n\n\n\n \t\t\t\t\tSection 5 Advance Javascript objects and functions."
);

console.info("\n\n\n\n\n\t\t\t\tConstructor using function");

class Vehicle {
  constructor(type, wheels, fuel, modelYear) {
    this.type = type;
    this.wheels = wheels;
    this.fuel = fuel;
    this.modelYear = modelYear;
    this.currentYear = new Date().getFullYear();
  }
    test(){
        return 'Simple Test';
    }
}

const car = new Vehicle("Car", 4, ["Petrol", "Diesel"], 2014);
const bike = new Vehicle("Bike", 2, "Petrol", 2015);
const truck = new Vehicle('Truck',6,'Diesel',2020);

console.log(car);
console.log(bike);

/*[Adding prototype with Vehicle class]*/

Vehicle.prototype.age = function () {
  return this.currentYear - this.modelYear >= 15
    ? `${this.type} Years if Over`
    : `${this.type} has left ${15 - (this.currentYear - this.modelYear)}`;
};
console.log(car.age());
console.log(bike.age());

console.log("hasOwnProperty : "+car.hasOwnProperty('age'));
console.log("isPrototypeOf of car : "+ Vehicle.prototype.isPrototypeOf(car));
console.log("isPrototypeOf of bike : "+ Vehicle.prototype.isPrototypeOf(bike));
console.log("car instance of Vehicle : "+`${car instanceof Vehicle}`);
console.log("bike instance of Vehicle : "+`${bike instanceof Vehicle}`);
console.log("truck instance of Vehicle : "+`${truck instanceof Vehicle}`);
console.log(Person);


console.log(car.test());

/*[making object with Constuctor fuunctions]*/

/* function TestConstruct(test1, test2, test3){
     this.test1 = test1;
     this.test2 = test2;
     this.test3 = test3;
}*/

// const TestConstruct = function(test1, test2, test3){}

/* class TestConstruct{
     constructor(test1, test2, test3){

     this.test1 = test1;
     this.test2 = test2;
     this.test3 = test3;
     }
     callmebae(){
         return `this is a test 1 : ${this.test1}`;
     }
}*/

// const result1 = new TestConstruct('test1', 'test2', 'test3');
// console.log(result1.callmebae());
