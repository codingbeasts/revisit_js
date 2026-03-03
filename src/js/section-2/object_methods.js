printTitle("Object and Methods");

dipanshu.calcAge = function (cy) {
  dipanshu.age = cy - this.birthyear;
};

dipanshu.calcAge(2023);

console.log(dipanshu.age);
