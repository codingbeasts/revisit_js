console.log("\n\n\n\n\n\t\t\t\treturn function as function");
function interView(job){
    switch(job){
        case 'designer':return function(name){return `${name} given interview for ${job}`};
        case 'programmer': return function (name){ return `${name} give interview for ${job}`};
        case 'accountant': return function (name){ return `${name} give interview for ${job}`};
        case 'manager': return function (name){ return `${name} give interview for ${job}`};
        case 'ceo': return function (name){ return `${name} give interview for ${job}`};
        default: return 'Enter Valid option';
    }
}

const dipanshushora = interView('ceo');
console.log(dipanshushora('dipanshu'));

console.log(interView('designer')('siddhant'));



