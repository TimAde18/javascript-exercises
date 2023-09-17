const findTheOldest = function(people) {
    return people.reduce((oldest, current) => {
        let ageOldest = (oldest.yearOfDeath || new Date().getFullYear()) - oldest.yearOfBirth;
        let ageCurrent = (current.yearOfDeath || new Date().getFullYear()) - current.yearOfBirth;

        return ageCurrent > ageOldest ? current : oldest;
    })
};


// Do not edit below this line
module.exports = findTheOldest;
