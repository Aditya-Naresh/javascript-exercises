const reverseString = function(string) {
    let i = string.length -1
    let ans =""

    while(i > -1){
        ans += string[i];
        i-- 
    }

    return ans;
};

// Do not edit below this line
module.exports = reverseString;
