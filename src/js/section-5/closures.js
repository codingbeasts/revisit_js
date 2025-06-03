console.log("\n\n\n\n\n\t\t\t\tclosures");
function retire(year){
    const age = 'many years left for you';
    return function(name){
        return `${name} has ${new Date().getFullYear() - year} ${age}`;
    }
}

// console.log(retire(1995)('dipanshu'));
const dipanshuRetire = retire(1995);

console.log(dipanshuRetire('dipanshu'));
