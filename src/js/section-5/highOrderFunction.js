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

console.log("Area of Square : " , areaSquare);
console.log("Perimeter of Square : " , periSquare);
console.log("Area of Rectangle : " , areaRect);
console.log("Perimeter of Rectangle : " , periRect);
