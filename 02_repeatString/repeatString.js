const repeatString = function(string, num) {
    let i = 0;
    let resultString = "";
    if (num < 0) {
        resultString = "ERROR";
        } else {
        while (i < num) {
            resultString += string
            i++;
        }
    }
    return resultString;
};

// Do not edit below this line
module.exports = repeatString;
