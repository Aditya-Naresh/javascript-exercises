const getTheTitles = function(obj) {
    let titleArray = []
    for (let i = 0; i < obj.length; i++) {
        titleArray[i] = obj[i].title
        
    }
    return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
