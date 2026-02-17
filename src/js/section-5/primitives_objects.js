console.info("\n\n\n\n\n\t\t\t\tPrimitivies objects");

var pr_age = 27;

const obj_age = {
    age: 28
}


function changePri(a,b){
    b.age = "Thiry";
    a = 19;
}

changePri(pr_age, obj_age);
function changePri(){
    obj_age.age = "Thiry";
    pr_age = 19;
}

changePri();

console.log(pr_age);
console.log(obj_age.age);
