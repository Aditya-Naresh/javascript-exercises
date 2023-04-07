const palindromes = function (str) {
    str = str.toLowerCase().replace(/[^\w]|_/g, "")
    for(let i = 0, j = str.length-1; i < j; i++, j--){
        if(str[i] !== str[j]){
            return false;
        }
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
