const repeatString = function(str, num) {
    if(num < 0){
        return ('ERROR')
    }
    let sol = "";

    for(let i = 0 ; i < num; i++){
        sol = sol+str;
    }
    return sol;
};

// Do not edit below this line
module.exports = repeatString;
