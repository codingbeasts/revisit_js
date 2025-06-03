var joseph = {
    name: 'joseph',
    yob: 1997,
    calcAge:function(){
        console.log(this);
        console.log(2023-1997);
        function innerfunction(){
            console.log(this);
        }
        innerfunction();
    }
};

joseph.calcAge();
