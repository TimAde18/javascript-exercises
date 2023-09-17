const fibonacci = function(num) {
    parseInt(num);
    let fibSequence = [0,1,1];
    let fibHolder = 0;
        if (num < 0) {
            return fibHolder = "OOPS";
        } else if (num == 1) {
            fibHolder = 1;
        } else if (num == 2) {
            fibHolder = 1;
        } else {
            for (let i=3; i <= num; i++) {
                fibHolder = fibSequence[i - 1] + fibSequence[i - 2]; 
            fibSequence.push(fibHolder);
            console.log(fibSequence);
            console.log(fibHolder);
            }
    }
    return fibHolder;
};

// Do not edit below this line
module.exports = fibonacci;
