printTitle("High Order Function in js");

const genericObj = function (val, func) {
  const objReturn = [];
  val.forEach((e) => {
    objReturn.push(func(e));
  });
  return objReturn;
};

const areaSquare = genericObj(
  [
    [4, 4],
    [5, 5],
    [6, 6],
  ],
  (e) => {
    const [s1, s2] = e;
    return s1 * s2;
  },
);
const periSquare = genericObj([4, 5, 6], (e) => 4 * e);

const areaRect = genericObj(
  [
    [4, 30],
    [5, 50],
    [6, 20],
  ],
  (e) => {
    const [l, b] = e;
    return l * b;
  },
);
const periRect = genericObj(
  [
    [4, 30],
    [5, 50],
    [6, 20],
  ],
  (e) => {
    const [l, b] = e;
    return 2 * (l + b);
  },
);

console.log("Area of Square : ", areaSquare);
console.log("Perimeter of Square : ", periSquare);
console.log("Area of Rectangle : ", areaRect);
console.log("Perimeter of Rectangle : ", periRect);

printHeading("Polyfills");
console.log(
  "Older Browser Doesn't Support modern Js methods like \n1 .map()\n2 .filter()\n3 .reduce()\n4 .includes()",
);

console.log("\n.map() method");

const numberCounting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(
  "Double Number : ",
  numberCounting.map((e) => {
   return e*2; 
  }),
);

console.log("\n.filter() method");
console.log("Odd Number : ",numberCounting.filter((e)=>{
    return e % 2 !== 0;
}));
console.log("Even Number : ",numberCounting.filter((e)=>{
    return e % 2 === 0;
}));
