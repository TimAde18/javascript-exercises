const removeFromArray = function(arr, ...theArgs) {
    console.log(arr)
    console.log(theArgs)
    function checkArray (value, theArgs) {
        for (let i=0; i < theArgs.length;i++) {
            if (value === theArgs[i]) {
                return false;
            }
        }
        return true;
    }
    const newArr = arr.filter((value) => checkArray(value, theArgs));
    console.log(newArr);
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
