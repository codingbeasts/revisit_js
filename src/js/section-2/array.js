console.log("\n\n\n\n\t\t\t\t Array");

var friendsName = ["jatin", "dipanshu", "siddhant"];

console.log("My firend's name "+friendsName);

console.log(".length function use "+friendsName.length);

var year = [2015, 2016, 2017.2018, 2019, 2020, 2021, 2022, 2023];

console.log("Year : "+year);

//mutate year array

year[year.length] = 2044;
console.log("adding year 2044 using .length = "+year);

// use new Array() method to create array
//

var foodlist = new Array(["Pomegrante", "Vegetables", "Guavava", "Chicco","Mangoes"]);

function loaditems(foodlist) {
  for (var i = 0; i <= foodlist.length; i++) {
    return foodlist[i]
  }
}

console.log("Print food item list "+loaditems(foodlist));

// push method add elements to last position
//
year.push(2024);
console.log("push() method is used to add item at the end of array : "+year);

// unshift method add elements to first position
//
year.unshift(2025);

console.log("unshift() method is used to add item at the start of array : "+year);

// pop() method remove last element from array
console.log("removed using pop() from the end : "+year.pop());

console.log("pop() method use : "+year);

// shift method removes first element from array
console.log("removed using shift() from the start : "+year.shift());

console.log("shift() method use : "+year);

// indexOf function
//
console.log("use of indexOf method : "+year.indexOf(2021));

year =  new Array('Array',1990);
console.log(year);
console.log(foodlist[0][4]);
