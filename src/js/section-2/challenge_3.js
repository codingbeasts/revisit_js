console.info("\n\n\n\n\t\t\t\tChallenge 3");

/*

John and his family went on a holiday and went to 3 different
restaurants. The bills were $124, $48 and $268.

To tips the waiter a fair amount, John created a simple tip
calculator (as a function). He likes to tip 20% of the bill
when the bill is less than $50, 15% when the bill is between
$50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 have arrays: 
1) Containing all three tips (one for each bill).
2) Containing all three final paid amounts (bill + tip).

(Note: To calculate 20% of a value, simply multiply
if with 20/100 = 0.2)
*/

var bill = [124, 48, 268],
  calc_tip = [],
  total_amt = [];

function tip_calc(s, perct, p) {
  calc_tip[p] = s * (perct / 100);
  total_amt[p] = s + calc_tip[p];
}

for (var i = 0; i < bill.length; i++) {
  var s = bill[i];
  // console.log(s);
  switch (true) {
    case s < 50:
      tip_calc(s, 20, i);
      break;
    case s > 50 && s < 200:
      tip_calc(s, 15, i);
      break;
    case s > 200:
      tip_calc(s, 10, i);
      break;
    default:
      console.log("no tips");
  }
}
console.log("John paid tips of : " + calc_tip);
console.log("John paid total ammount with tip : " + total_amt);
