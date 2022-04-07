const sumAll = function(...args) {

    let newArray = [];
    let argArray = Array.from(args);

    let max = Math.max(...argArray);
    let min = Math.min(...argArray);

    for (i = min; i <= max; i++) {

        if (!args.includes(i)) {
            newArray.push(i);
        }
    }

    newArray.push(argArray[1]); //add an element to the end of newArray
    newArray.unshift(argArray[0]); //add element to the beggining

    let total = newArray.reduce(function(a, b){return a + b;})

    console.log(total);

    let result = args.filter(arg => typeof arg === 'number');
    let result2 = args.find(arg => arg < 0);

    if (result.length === 1) {
        return 'ERROR';
    } else if (result2 < 0) {
        return 'ERROR';
    } else return total;
};

sumAll(1, 4);


// Do not edit below this line
module.exports = sumAll;
