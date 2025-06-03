console.log("\n\n\n\n\t\t\t\tObject and Methods");

dipanshu.calcAge = function (cy) {
    dipanshu.age = cy - this.birthyear;
};

dipanshu.calcAge(2023);

console.log(dipanshu.age);
