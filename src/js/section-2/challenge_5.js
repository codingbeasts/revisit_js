console.info("\n\n\n\n\t\t\t\t Challenge 5");

/*
 *  Remember the tip calculator challenge 3? Let's create a more advanced version using everything
 *  we learned:
 *
 *  This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268
 *  $180 and $42.
 *
 *  John likes to tips 20% of the bill when the bill is less than $50, 15% when the bill is between
 *  $50 and $200, and %10 if the bill is more than $200.
 *
 *
 *  Implement a tip calculator using Objects and loops:
 *
 *  1: Create an object with an array for the billl values.
 *  2: Add a method to calculate the tips.
 *  3. This method should include a loop to iterate over all the paid bills and do the calculation.
 *  4. As an output, create
 *      1. A new array to containing all tips.
 *      2.Array containing final paid amounts (bill + tips).
 *      Hint. Start wth empty array and then fill them up in the loop.
 *
 *      Extra after finishing: Mark's family also went on a holiday, going to 4 different
 *      restaurants. The bills were $77, $375, $110, and $45.
 *
 *      Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is
 *      between $100 and $300, and 25% if the bill is more than $300.
 *
 *  5. Implement the same functinality as before, this time using Mark's tipping rules.
 *  6. Create a function (not a method) to calculate the average of a given array of tips.
 *
 *      Hint. loop over the array and in each iternation store current sum in a variable (starting
 *      from 0). After you have the sum of array, divide it by the number of elements in it.
 *      That's how you calculate the average.
 *  7. Calculate the average tip for each family.
 *  8 log to console which family paid th highest tips on average.
 *
 *
 * */

// const Obj_bill = function (bill, tip) { //contructor to create object
//   this.bill = bill;
//   this.total_amt = [];
//   this.calc_tip = function () {
//     let calc_amt = [];
//     for (var i = 0; i < bill.length; i++) {
//       calc_amt.push(tip(bill[i]));
//       this.total_amt.push(bill[i] + calc_amt[i]);
//     }
//     return calc_amt;
//   };
// };
class Obj_bill {
  constructor(bill, tip) {
    this.bill = bill;
    this.total_amt = [];
    this.calc_tip = function () {
      let calc_amt = [];
      for (var i = 0; i < bill.length; i++) {
        calc_amt.push(tip(bill[i]));
        this.total_amt.push(bill[i] + calc_amt[i]);
      }
      return calc_amt;
    };
  }
}

const jatinP = new Obj_bill([124, 48, 268, 180, 42], jtip);
console.log("Jatin Calculated Tip Amount : "+jatinP.calc_tip());
console.log("Jatin Calculated Total Amount : "+jatinP.total_amt);
const dipanshuP = new Obj_bill([77, 375, 110, 45], mtip);
console.log("Dipanshu Calculated Tip Amount : "+dipanshuP.calc_tip());
console.log("Dipanshu Calculated Total Amount : "+dipanshuP.total_amt);
function jtip(el) {
  switch (true) {
    case el < 50:
      return el * 0.2;
    case el > 50 && el < 200:
      return el * 0.15;
    case el > 200:
      return el * 0.1;
  }
}

function mtip(el) {
  switch (true) {
    case el < 100:
      return el * 0.2;
    case el > 100 && el < 300:
      return el * 0.1;
    case el > 300:
      return el * 0.25;
  }
}

function averageTips(tip) {
  var average = 0;
  tip.forEach((el) => {
    average += el;
  });
  return average / tip.length;
}

if (averageTips(jatinP.calc_tip()) > averageTips(dipanshuP.calc_tip())) {
  console.log(
    `Jatin has paid more tips than mark : ${averageTips(jatinP.calc_tip())}`
  );
} else if (averageTips(jatinP.calc_tip()) < averageTips(dipanshuP.calc_tip())) {
  console.log(
    `Dipanshu has paid more tips than John : ${averageTips(dipanshuP.calc_tip())}`
  );
} else {
  console.log(`Jatin and Dipanshu has paid same tip amount`);
}
