const findTheOldest = function(people) {
    return people.reduce((oldest, currentPerson) => {
        let oldestAge = (oldest.yearOfDeath || new Date().getFullYear()) - oldest.yearOfBirth;
        let currentAge = (currentPerson.yearOfDeath || new Date().getFullYear()) - currentPerson.yearOfBirth;

        return oldestAge > currentAge ? oldest : currentPerson;
    });
};


// Do not edit below this line
module.exports = findTheOldest;
