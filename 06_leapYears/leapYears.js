const leapYears = function(year) {

    if (year % 100 === 0 && year % 400 === 0 && year % 4 === 0) {

        return true;

    } else if (year % 100 === 0) {

        return false;

    } else if (year % 4 === 0 || year % 400 === 0) {
        return true;

    } else {
        return false;
    }
};

let result = leapYears(2000);

console.log(result);

console.log(1600 % 100, 1600 % 400, 1600 % 4);
console.log(700 % 100, 700 % 400, 700 % 4);

// Do not edit below this line
module.exports = leapYears;
